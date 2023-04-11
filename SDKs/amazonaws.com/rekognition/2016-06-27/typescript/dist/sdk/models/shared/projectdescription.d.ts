import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetMetadata } from "./datasetmetadata";
import { ProjectStatusEnum } from "./projectstatusenum";
/**
 * A description of an Amazon Rekognition Custom Labels project. For more information, see <a>DescribeProjects</a>.
 */
export declare class ProjectDescription extends SpeakeasyBase {
    creationTimestamp?: Date;
    datasets?: DatasetMetadata[];
    projectArn?: string;
    status?: ProjectStatusEnum;
}
