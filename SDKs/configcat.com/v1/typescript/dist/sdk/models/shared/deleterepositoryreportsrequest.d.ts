import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteRepositoryReportsRequest extends SpeakeasyBase {
    /**
     * If it's set, only this branch's reports belonging to the given repository will be deleted.
     */
    branch?: string;
    /**
     * The Config's identifier from where the reports should be deleted.
     */
    configId: string;
    /**
     * The source control repository which's reports should be deleted.
     */
    repository: string;
    /**
     * If it's set, only this setting's reports belonging to the given repository will be deleted.
     */
    settingId?: number;
}
