import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Makes it possible to control how your transcription job is processed. Currently, the only <code>JobExecutionSettings</code> modification you can choose is enabling job queueing using the <code>AllowDeferredExecution</code> sub-parameter.</p> <p>If you include <code>JobExecutionSettings</code> in your request, you must also include the sub-parameters: <code>AllowDeferredExecution</code> and <code>DataAccessRoleArn</code>.</p>
 */
export declare class JobExecutionSettings extends SpeakeasyBase {
    allowDeferredExecution?: boolean;
    dataAccessRoleArn?: string;
}
