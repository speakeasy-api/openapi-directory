import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the request to delete a user pool client.
 */
export declare class DeleteUserPoolClientRequest extends SpeakeasyBase {
    clientId: string;
    userPoolId: string;
}
