import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";



export class Analysis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_finished" })
  dateFinished?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_last_modified" })
  dateLastModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_launched" })
  dateLaunched?: Date;

  @SpeakeasyMetadata({ data: "json, name=features" })
  features?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=urls_done" })
  urlsDone?: string;

  @SpeakeasyMetadata({ data: "json, name=urls_in_queue" })
  urlsInQueue?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: User;
}
