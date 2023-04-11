import { SpeakeasyBase } from "../../../internal/utils";
import { EstimationDetailsApiModel } from "./estimationdetailsapimodel";
import { IErrorInfo } from "./ierrorinfo";
/**
 * OK
 */
export declare class ListResultEstimationDetailsApiModel extends SpeakeasyBase {
    count?: number;
    errorMessages?: IErrorInfo[];
    isFaulted?: boolean;
    result?: EstimationDetailsApiModel[];
    totalCount?: number;
}
