import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceInsightHealth } from "./serviceinsighthealth";
import { ServiceNameEnum } from "./servicenameenum";
/**
 * Represents the health of an Amazon Web Services service.
 */
export declare class ServiceHealth extends SpeakeasyBase {
    analyzedResourceCount?: number;
    insight?: ServiceInsightHealth;
    serviceName?: ServiceNameEnum;
}
