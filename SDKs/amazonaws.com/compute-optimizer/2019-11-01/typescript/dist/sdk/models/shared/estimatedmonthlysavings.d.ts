import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
/**
 * <p>Describes the estimated monthly savings amount possible, based on On-Demand instance pricing, by adopting Compute Optimizer recommendations for a given resource.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/view-ec2-recommendations.html#ec2-savings-calculation">Estimated monthly savings and savings opportunities</a> in the <i>Compute Optimizer User Guide</i>.</p>
 */
export declare class EstimatedMonthlySavings extends SpeakeasyBase {
    currency?: CurrencyEnum;
    value?: number;
}
