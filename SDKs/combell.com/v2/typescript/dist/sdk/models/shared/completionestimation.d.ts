import { SpeakeasyBase } from "../../../internal/utils";
export declare class CompletionEstimation extends SpeakeasyBase {
    /**
     * The estimated time when the job should be finished.<br />
     *
     * @remarks
     * Unexpected delays can always occur.<br />
     * The value is subject to change during the provisioning.
     */
    estimate?: Date;
}
