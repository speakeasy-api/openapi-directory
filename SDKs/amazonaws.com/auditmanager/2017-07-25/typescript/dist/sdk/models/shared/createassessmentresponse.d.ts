import { SpeakeasyBase } from "../../../internal/utils";
import { Assessment } from "./assessment";
/**
 * Success
 */
export declare class CreateAssessmentResponse extends SpeakeasyBase {
    /**
     *  An entity that defines the scope of audit evidence collected by Audit Manager. An Audit Manager assessment is an implementation of an Audit Manager framework.
     */
    assessment?: Assessment;
}
