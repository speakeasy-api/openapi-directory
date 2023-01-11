import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectSettingsSerializer } from "./projectsettingsserializer";
import { User } from "./user";



export class Project extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=current_settings" })
  currentSettings: ProjectSettingsSerializer;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: User;
}
