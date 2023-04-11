import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateContactListFromFileSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateContactListFromFileRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class CreateContactListFromFileRequestBody extends SpeakeasyBase {
    /**
     * CSV file to be uploaded
     */
    file: CreateContactListFromFileRequestBodyFile;
    /**
     * A name of a contact list
     */
    name?: string;
    /**
     * A flag to indicate how to define property names for contacts. If true, uses the field and property names exactly as defined. If false will assign custom properties and fields to A, B, C, etc
     */
    useCustomFields?: boolean;
}
export declare class CreateContactListFromFileResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * successful operation
     */
    resourceId?: shared.ResourceId;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
