import { SpeakeasyBase } from "../../../internal/utils";
import { CancellationStatusEnum } from "./cancellationstatusenum";
/**
 * Success
 */
export declare class CancelJobResponse extends SpeakeasyBase {
    cancellationStatus: CancellationStatusEnum;
    jobArn: string;
}
