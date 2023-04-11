import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ScimUpdateAttributeForUserRequestBodyOperationsOpEnum {
    Add = "add",
    Remove = "remove",
    Replace = "replace"
}
export declare class ScimUpdateAttributeForUserRequestBodyOperationsValue2 extends SpeakeasyBase {
    primary?: boolean;
    value?: string;
}
export declare class ScimUpdateAttributeForUserRequestBodyOperationsValue1 extends SpeakeasyBase {
    active?: boolean;
    externalId?: string;
    familyName?: string;
    givenName?: string;
    userName?: string;
}
export declare class ScimUpdateAttributeForUserRequestBodyOperations extends SpeakeasyBase {
    op: ScimUpdateAttributeForUserRequestBodyOperationsOpEnum;
    path?: string;
    value?: any;
}
export declare class ScimUpdateAttributeForUserRequestBody extends SpeakeasyBase {
    /**
     * Set of operations to be performed
     */
    operations: ScimUpdateAttributeForUserRequestBodyOperations[];
    schemas?: string[];
}
export declare class ScimUpdateAttributeForUserRequest extends SpeakeasyBase {
    requestBody: ScimUpdateAttributeForUserRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The unique identifier of the SCIM user.
     */
    scimUserId: string;
}
export declare class ScimUpdateAttributeForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    basicError?: shared.BasicError;
    /**
     * Bad request
     */
    scimError?: shared.ScimError;
    /**
     * Response
     */
    scimUser?: shared.ScimUser;
}
