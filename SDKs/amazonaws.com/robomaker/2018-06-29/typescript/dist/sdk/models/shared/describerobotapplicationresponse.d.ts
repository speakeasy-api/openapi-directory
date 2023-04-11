import { SpeakeasyBase } from "../../../internal/utils";
import { Environment } from "./environment";
import { RobotSoftwareSuite } from "./robotsoftwaresuite";
import { Source } from "./source";
/**
 * Success
 */
export declare class DescribeRobotApplicationResponse extends SpeakeasyBase {
    arn?: string;
    environment?: Environment;
    imageDigest?: string;
    lastUpdatedAt?: Date;
    name?: string;
    revisionId?: string;
    robotSoftwareSuite?: RobotSoftwareSuite;
    sources?: Source[];
    tags?: Record<string, string>;
    version?: string;
}
