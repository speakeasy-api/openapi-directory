import { SpeakeasyBase } from "../../../internal/utils";
import { DBProxyEndpointTargetRoleEnum } from "./dbproxyendpointtargetroleenum";
import { TagList } from "./taglist";
export declare class CreateDBProxyEndpointRequest extends SpeakeasyBase {
    dbProxyEndpointName: string;
    dbProxyName: string;
    /**
     * A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
     */
    tags?: TagList[];
    targetRole?: DBProxyEndpointTargetRoleEnum;
    vpcSecurityGroupIds?: string[];
    vpcSubnetIds: string[];
}
