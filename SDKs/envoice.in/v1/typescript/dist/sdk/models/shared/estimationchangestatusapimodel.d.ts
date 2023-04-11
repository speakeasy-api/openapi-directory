import { SpeakeasyBase } from "../../../internal/utils";
/**
 * New status of the estimation
 */
export declare enum EstimationChangeStatusApiModelStatusEnum {
    Draft = "Draft",
    Accepted = "Accepted",
    Rejected = "Rejected"
}
export declare class EstimationChangeStatusApiModel extends SpeakeasyBase {
    /**
     * Estimation Id
     */
    id?: number;
    /**
     * New status of the estimation
     */
    status?: EstimationChangeStatusApiModelStatusEnum;
}
