import { SpeakeasyBase } from "../../../internal/utils";
import { MessageGroup } from "./messagegroup";
import { MessageSelectionStrategyEnum } from "./messageselectionstrategyenum";
import { PromptAttemptSpecification } from "./promptattemptspecification";
/**
 * Specifies a list of message groups that Amazon Lex sends to a user to elicit a response.
 */
export declare class PromptSpecification extends SpeakeasyBase {
    allowInterrupt?: boolean;
    maxRetries: number;
    messageGroups: MessageGroup[];
    messageSelectionStrategy?: MessageSelectionStrategyEnum;
    promptAttemptsSpecification?: Record<string, PromptAttemptSpecification>;
}
