import { SpeakeasyBase } from "../../../internal/utils";
import { EmailListAttributes } from "./emaillistattributes";
import { EmailListRelationships } from "./emaillistrelationships";
/**
 * A single email group list
**/
export declare class EmailList extends SpeakeasyBase {
    attributes?: EmailListAttributes;
    id?: number;
    relationships?: EmailListRelationships;
    type?: string;
}
