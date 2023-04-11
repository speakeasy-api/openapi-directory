import { SpeakeasyBase } from "../../../internal/utils";
import { Environment } from "./environment";
import { RenderingEngine } from "./renderingengine";
import { RobotSoftwareSuite } from "./robotsoftwaresuite";
import { SimulationSoftwareSuite } from "./simulationsoftwaresuite";
import { Source } from "./source";
/**
 * Success
 */
export declare class DescribeSimulationApplicationResponse extends SpeakeasyBase {
    arn?: string;
    environment?: Environment;
    imageDigest?: string;
    lastUpdatedAt?: Date;
    name?: string;
    renderingEngine?: RenderingEngine;
    revisionId?: string;
    robotSoftwareSuite?: RobotSoftwareSuite;
    simulationSoftwareSuite?: SimulationSoftwareSuite;
    sources?: Source[];
    tags?: Record<string, string>;
    version?: string;
}
