import { SpeakeasyBase } from "../../../internal/utils";
import { ConstraintDetail } from "./constraintdetail";
import { StatusEnum } from "./statusenum";
/**
 * Success
 */
export declare class DescribeConstraintOutput extends SpeakeasyBase {
    constraintDetail?: ConstraintDetail;
    constraintParameters?: string;
    status?: StatusEnum;
}
