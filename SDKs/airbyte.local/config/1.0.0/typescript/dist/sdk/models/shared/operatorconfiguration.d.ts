import { SpeakeasyBase } from "../../../internal/utils";
import { OperatorDbt } from "./operatordbt";
import { OperatorNormalization } from "./operatornormalization";
import { OperatorTypeEnum } from "./operatortypeenum";
import { OperatorWebhook } from "./operatorwebhook";
export declare class OperatorConfiguration extends SpeakeasyBase {
    dbt?: OperatorDbt;
    normalization?: OperatorNormalization;
    operatorType: OperatorTypeEnum;
    webhook?: OperatorWebhook;
}
