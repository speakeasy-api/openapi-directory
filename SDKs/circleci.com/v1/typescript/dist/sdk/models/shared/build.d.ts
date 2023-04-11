import { SpeakeasyBase } from "../../../internal/utils";
import { LifecycleEnum } from "./lifecycleenum";
import { PreviousBuild } from "./previousbuild";
/**
 * returns a summary of the build
 */
export declare class Build extends SpeakeasyBase {
    /**
     * commit message body
     */
    body?: string;
    branch?: string;
    buildTimeMillis?: number;
    buildUrl?: string;
    committerEmail?: string;
    committerName?: string;
    /**
     * reason why we didn't build, if we didn't build
     */
    dontBuild?: string;
    lifecycle?: LifecycleEnum;
    /**
     * previous build
     */
    previous?: PreviousBuild;
    /**
     * time build was queued
     */
    queuedAt?: Date;
    reponame?: string;
    /**
     * build_num of the build this is a retry of
     */
    retryOf?: number;
    /**
     * time build started
     */
    startTime?: Date;
    /**
     * time build finished
     */
    stopTime?: Date;
    subject?: string;
    username?: string;
    vcsUrl?: string;
    /**
     * short string explaining the reason we built
     */
    why?: string;
}
