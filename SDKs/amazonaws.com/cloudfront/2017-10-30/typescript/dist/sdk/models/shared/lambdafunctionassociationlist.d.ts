import { SpeakeasyBase } from "../../../internal/utils";
import { EventTypeEnum } from "./eventtypeenum";
/**
 * A complex type that contains a Lambda function association.
 */
export declare class LambdaFunctionAssociationList extends SpeakeasyBase {
    eventType: EventTypeEnum;
    lambdaFunctionARN: string;
}
