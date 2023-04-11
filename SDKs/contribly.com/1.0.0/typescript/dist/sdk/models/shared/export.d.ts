import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An export job describing the state of an export job.
 */
export declare class Export extends SpeakeasyBase {
    downloadUrl?: string;
    finished?: Date;
    id: string;
    owner: string;
    progress?: number;
    started: Date;
    step?: string;
}
