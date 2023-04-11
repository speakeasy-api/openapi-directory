import { SpeakeasyBase } from "../../../internal/utils";
import { JobWithAttemptsRead } from "./jobwithattemptsread";
/**
 * Successful operation
 */
export declare class JobReadList extends SpeakeasyBase {
    jobs: JobWithAttemptsRead[];
    /**
     * the total count of jobs for the specified connection
     */
    totalJobCount: number;
}
