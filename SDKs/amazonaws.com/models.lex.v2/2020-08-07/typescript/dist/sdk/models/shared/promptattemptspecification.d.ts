import { SpeakeasyBase } from "../../../internal/utils";
import { AllowedInputTypes } from "./allowedinputtypes";
import { AudioAndDTMFInputSpecification } from "./audioanddtmfinputspecification";
import { TextInputSpecification } from "./textinputspecification";
/**
 * Specifies the settings on a prompt attempt.
 */
export declare class PromptAttemptSpecification extends SpeakeasyBase {
    allowInterrupt?: boolean;
    allowedInputTypes: AllowedInputTypes;
    audioAndDTMFInputSpecification?: AudioAndDTMFInputSpecification;
    textInputSpecification?: TextInputSpecification;
}
