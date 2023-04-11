import { SpeakeasyBase } from "../../../internal/utils";
import { Assessment } from "./assessment";
import { Role } from "./role";
/**
 * Success
 */
export declare class GetAssessmentResponse extends SpeakeasyBase {
    /**
     *  An entity that defines the scope of audit evidence collected by Audit Manager. An Audit Manager assessment is an implementation of an Audit Manager framework.
     */
    assessment?: Assessment;
    /**
     *  The wrapper that contains the Audit Manager role information of the current user. This includes the role type and IAM Amazon Resource Name (ARN).
     */
    userRole?: Role;
}
