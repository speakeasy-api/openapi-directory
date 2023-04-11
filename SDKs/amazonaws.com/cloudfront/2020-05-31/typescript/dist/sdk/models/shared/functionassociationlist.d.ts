import { SpeakeasyBase } from "../../../internal/utils";
import { EventTypeEnum } from "./eventtypeenum";
/**
 * A CloudFront function that is associated with a cache behavior in a CloudFront distribution.
 */
export declare class FunctionAssociationList extends SpeakeasyBase {
    eventType: EventTypeEnum;
    functionARN: string;
}
