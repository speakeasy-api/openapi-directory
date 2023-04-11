import { SpeakeasyBase } from "../../../internal/utils";
import { BlueGreenDeploymentTask } from "./bluegreendeploymenttask";
import { SwitchoverDetail } from "./switchoverdetail";
import { TagList } from "./taglist";
/**
 * <p>Contains the details about a blue/green deployment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html"> Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>
 */
export declare class BlueGreenDeployment extends SpeakeasyBase {
    blueGreenDeploymentIdentifier?: string;
    blueGreenDeploymentName?: string;
    createTime?: Date;
    deleteTime?: Date;
    source?: string;
    status?: string;
    statusDetails?: string;
    switchoverDetails?: SwitchoverDetail[];
    /**
     * A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
     */
    tagList?: TagList[];
    target?: string;
    tasks?: BlueGreenDeploymentTask[];
}
