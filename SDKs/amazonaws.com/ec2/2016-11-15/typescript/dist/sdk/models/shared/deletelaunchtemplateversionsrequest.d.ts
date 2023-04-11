import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteLaunchTemplateVersionsRequest extends SpeakeasyBase {
    dryRun?: boolean;
    launchTemplateId?: string;
    launchTemplateName?: string;
    versions: string[];
}
