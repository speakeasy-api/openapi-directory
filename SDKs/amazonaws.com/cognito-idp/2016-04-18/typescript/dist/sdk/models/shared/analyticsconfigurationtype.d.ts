import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The Amazon Pinpoint analytics configuration necessary to collect metrics for a user pool.</p> <note> <p>In Regions where Amazon Pinpointisn't available, user pools only support sending events to Amazon Pinpoint projects in us-east-1. In Regions where Amazon Pinpoint is available, user pools support sending events to Amazon Pinpoint projects within that same Region.</p> </note>
 */
export declare class AnalyticsConfigurationType extends SpeakeasyBase {
    applicationArn?: string;
    applicationId?: string;
    externalId?: string;
    roleArn?: string;
    userDataShared?: boolean;
}
