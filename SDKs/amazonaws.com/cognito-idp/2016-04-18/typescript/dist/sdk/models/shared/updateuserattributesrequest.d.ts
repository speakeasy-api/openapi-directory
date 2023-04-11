import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeType } from "./attributetype";
/**
 * Represents the request to update user attributes.
 */
export declare class UpdateUserAttributesRequest extends SpeakeasyBase {
    accessToken: string;
    clientMetadata?: Record<string, string>;
    userAttributes: AttributeType[];
}
