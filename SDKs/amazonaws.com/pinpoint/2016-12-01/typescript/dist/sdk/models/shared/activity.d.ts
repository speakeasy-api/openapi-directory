import { SpeakeasyBase } from "../../../internal/utils";
import { ConditionalSplitActivity } from "./conditionalsplitactivity";
import { ContactCenterActivity } from "./contactcenteractivity";
import { CustomMessageActivity } from "./custommessageactivity";
import { EmailMessageActivity } from "./emailmessageactivity";
import { HoldoutActivity } from "./holdoutactivity";
import { MultiConditionalSplitActivity } from "./multiconditionalsplitactivity";
import { PushMessageActivity } from "./pushmessageactivity";
import { RandomSplitActivity } from "./randomsplitactivity";
import { SMSMessageActivity } from "./smsmessageactivity";
import { WaitActivity } from "./waitactivity";
/**
 * Specifies the configuration and other settings for an activity in a journey.
 */
export declare class Activity extends SpeakeasyBase {
    custom?: CustomMessageActivity;
    conditionalSplit?: ConditionalSplitActivity;
    contactCenter?: ContactCenterActivity;
    description?: string;
    email?: EmailMessageActivity;
    holdout?: HoldoutActivity;
    multiCondition?: MultiConditionalSplitActivity;
    push?: PushMessageActivity;
    randomSplit?: RandomSplitActivity;
    sms?: SMSMessageActivity;
    wait?: WaitActivity;
}
