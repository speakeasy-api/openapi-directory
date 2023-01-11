import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProjectStatusRequestColorEnum {
    Green = "green",
    Yellow = "yellow",
    Red = "red",
    Blue = "blue"
}


// ProjectStatusRequestInput
/** 
 * A *project status* is an update on the progress of a particular project, and is sent out to all project followers when created. These updates include both text describing the update and a color code intended to represent the overall state of the project: "green" for projects that are on track, "yellow" for projects at risk, and "red" for projects that are behind.
**/
export class ProjectStatusRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color: ProjectStatusRequestColorEnum;

  @SpeakeasyMetadata({ data: "json, name=html_text" })
  htmlText?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
