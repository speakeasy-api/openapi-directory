import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The Lake Formation principal. Supported principals are IAM users or IAM roles.
 */
export declare class GrantPermissionsRequestBodyPrincipal extends SpeakeasyBase {
    dataLakePrincipalIdentifier?: string;
}
/**
 * A structure for the resource.
 */
export declare class GrantPermissionsRequestBodyResource extends SpeakeasyBase {
    catalog?: Record<string, any>;
    dataCellsFilter?: shared.DataCellsFilterResource;
    dataLocation?: shared.DataLocationResource;
    database?: shared.DatabaseResource;
    lfTag?: shared.LFTagKeyResource;
    lfTagPolicy?: shared.LFTagPolicyResource;
    table?: shared.TableResource;
    tableWithColumns?: shared.TableWithColumnsResource;
}
export declare class GrantPermissionsRequestBody extends SpeakeasyBase {
    /**
     * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
     */
    catalogId?: string;
    /**
     * The permissions granted to the principal on the resource. Lake Formation defines privileges to grant and revoke access to metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3. Lake Formation requires that each principal be authorized to perform a specific task on Lake Formation resources.
     */
    permissions: shared.PermissionEnum[];
    /**
     * Indicates a list of the granted permissions that the principal may pass to other users. These permissions may only be a subset of the permissions granted in the <code>Privileges</code>.
     */
    permissionsWithGrantOption?: shared.PermissionEnum[];
    /**
     * The Lake Formation principal. Supported principals are IAM users or IAM roles.
     */
    principal: GrantPermissionsRequestBodyPrincipal;
    /**
     * A structure for the resource.
     */
    resource: GrantPermissionsRequestBodyResource;
}
export declare class GrantPermissionsRequest extends SpeakeasyBase {
    requestBody: GrantPermissionsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GrantPermissionsResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * Success
     */
    grantPermissionsResponse?: Record<string, any>;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
