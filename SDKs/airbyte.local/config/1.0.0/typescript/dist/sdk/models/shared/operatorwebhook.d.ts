import { SpeakeasyBase } from "../../../internal/utils";
export declare class OperatorWebhookDbtCloud extends SpeakeasyBase {
    /**
     * The account id associated with the job
     */
    accountId: number;
    /**
     * The job id associated with the job
     */
    jobId: number;
}
export declare enum OperatorWebhookWebhookTypeEnum {
    DbtCloud = "dbtCloud"
}
export declare class OperatorWebhook extends SpeakeasyBase {
    dbtCloud?: OperatorWebhookDbtCloud;
    /**
     * DEPRECATED. Populate dbtCloud instead.
     */
    executionBody?: string;
    /**
     * DEPRECATED. Populate dbtCloud instead.
     */
    executionUrl?: string;
    /**
     * The id of the webhook configs to use from the workspace.
     */
    webhookConfigId?: string;
    webhookType?: OperatorWebhookWebhookTypeEnum;
}
