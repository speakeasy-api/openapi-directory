import { SpeakeasyBase } from "../../../internal/utils";
import { AttemptInfoRead } from "./attemptinforead";
import { JobRead } from "./jobread";
/**
 * Successful operation
 */
export declare class JobInfoRead extends SpeakeasyBase {
    attempts: AttemptInfoRead[];
    job: JobRead;
}
