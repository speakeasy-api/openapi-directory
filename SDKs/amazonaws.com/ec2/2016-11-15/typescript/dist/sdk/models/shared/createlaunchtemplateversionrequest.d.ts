import { SpeakeasyBase } from "../../../internal/utils";
import { RequestLaunchTemplateData } from "./requestlaunchtemplatedata";
export declare class CreateLaunchTemplateVersionRequest extends SpeakeasyBase {
    clientToken?: string;
    dryRun?: boolean;
    launchTemplateData: RequestLaunchTemplateData;
    launchTemplateId?: string;
    launchTemplateName?: string;
    resolveAlias?: boolean;
    sourceVersion?: string;
    versionDescription?: string;
}
