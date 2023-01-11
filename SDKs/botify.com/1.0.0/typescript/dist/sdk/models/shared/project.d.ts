import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectSettingsSerializer } from "./projectsettingsserializer";
import { User } from "./user";
export declare class Project extends SpeakeasyBase {
    active?: boolean;
    currentSettings: ProjectSettingsSerializer;
    dateCreated?: string;
    name: string;
    slug: string;
    user: User;
}
