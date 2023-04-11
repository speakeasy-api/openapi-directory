import { SpeakeasyBase } from "../../../internal/utils";
import { ScriptParameterKeyValue } from "./scriptparameterkeyvalue";
import { StudioComponentConfiguration } from "./studiocomponentconfiguration";
import { StudioComponentInitializationScript } from "./studiocomponentinitializationscript";
import { StudioComponentStateEnum } from "./studiocomponentstateenum";
import { StudioComponentStatusCodeEnum } from "./studiocomponentstatuscodeenum";
import { StudioComponentSubtypeEnum } from "./studiocomponentsubtypeenum";
import { StudioComponentTypeEnum } from "./studiocomponenttypeenum";
/**
 * <p>A studio component represents a network resource to be used by a studio's users and workflows. A typical studio contains studio components for each of the following: render farm, Active Directory, licensing, and file system.</p> <p>Access to a studio component is managed by specifying security groups for the resource, as well as its endpoint.</p> <p>A studio component also has a set of initialization scripts that are returned by <code>GetLaunchProfileInitialization</code>. These initialization scripts run on streaming sessions when they start. They provide users with flexibility in controlling how the studio resources are configured on a streaming session.</p>
 */
export declare class StudioComponent extends SpeakeasyBase {
    arn?: string;
    configuration?: StudioComponentConfiguration;
    createdAt?: Date;
    createdBy?: string;
    description?: string;
    ec2SecurityGroupIds?: string[];
    initializationScripts?: StudioComponentInitializationScript[];
    name?: string;
    runtimeRoleArn?: string;
    scriptParameters?: ScriptParameterKeyValue[];
    secureInitializationRoleArn?: string;
    state?: StudioComponentStateEnum;
    statusCode?: StudioComponentStatusCodeEnum;
    statusMessage?: string;
    studioComponentId?: string;
    subtype?: StudioComponentSubtypeEnum;
    tags?: Record<string, string>;
    type?: StudioComponentTypeEnum;
    updatedAt?: Date;
    updatedBy?: string;
}
