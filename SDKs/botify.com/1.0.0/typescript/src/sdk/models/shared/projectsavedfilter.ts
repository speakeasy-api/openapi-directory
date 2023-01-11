import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProjectSavedFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
