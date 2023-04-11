import { SpeakeasyBase } from "../../../internal/utils";
import { StatisticalIssueStatusEnum } from "./statisticalissuestatusenum";
/**
 *  Entity that comprises information on categorical values in data.
 */
export declare class CategoricalValues extends SpeakeasyBase {
    numberOfCategory?: number;
    status: StatisticalIssueStatusEnum;
}
