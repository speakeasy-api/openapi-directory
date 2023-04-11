import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The Lake Formation principal. Supported principals are IAM users or IAM roles.
 */
export declare class RevokePermissionsRequestBodyPrincipal extends SpeakeasyBase {
    dataLakePrincipalIdentifier?: string;
}
/**
 * A structure for the resource.
 */
export declare class RevokePermissionsRequestBodyResource extends SpeakeasyBase {
    catalog?: Record<string, any>;
    dataCellsFilter?: shared.DataCellsFilterResource;
    dataLocation?: shared.DataLocationResource;
    database?: shared.DatabaseResource;
    lfTag?: shared.LFTagKeyResource;
    lfTagPolicy?: shared.LFTagPolicyResource;
    table?: shared.TableResource;
    tableWithColumns?: shared.TableWithColumnsResource;
}
export declare class RevokePermissionsRequestBody extends SpeakeasyBase {
    /**
     * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
     */
    catalogId?: string;
    /**
     * The permissions revoked to the principal on the resource. For information about permissions, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.
     */
    permissions: shared.PermissionEnum[];
    /**
     * Indicates a list of permissions for which to revoke the grant option allowing the principal to pass permissions to other principals.
     */
    permissionsWithGrantOption?: shared.PermissionEnum[];
    /**
     * The Lake Formation principal. Supported principals are IAM users or IAM roles.
     */
    principal: RevokePermissionsRequestBodyPrincipal;
    /**
     * A structure for the resource.
     */
    resource: RevokePermissionsRequestBodyResource;
}
export declare class RevokePermissionsRequest extends SpeakeasyBase {
    requestBody: RevokePermissionsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RevokePermissionsResponse extends SpeakeasyBase {
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
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * Success
     */
    revokePermissionsResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
