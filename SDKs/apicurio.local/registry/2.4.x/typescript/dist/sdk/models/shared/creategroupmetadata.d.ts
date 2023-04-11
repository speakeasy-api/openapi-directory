import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateGroupMetaData extends SpeakeasyBase {
    description?: string;
    id: string;
    /**
     * User-defined name-value pairs. Name and value must be strings.
     */
    properties?: Record<string, string>;
}
