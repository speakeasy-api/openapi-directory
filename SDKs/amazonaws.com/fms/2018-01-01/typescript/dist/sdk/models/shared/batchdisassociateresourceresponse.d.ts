import { SpeakeasyBase } from "../../../internal/utils";
import { FailedItem } from "./faileditem";
/**
 * Success
 */
export declare class BatchDisassociateResourceResponse extends SpeakeasyBase {
    failedItems: FailedItem[];
    resourceSetIdentifier: string;
}
