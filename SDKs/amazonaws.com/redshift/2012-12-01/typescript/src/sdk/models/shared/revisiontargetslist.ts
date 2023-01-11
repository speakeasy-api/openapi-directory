import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RevisionTargetsList
/** 
 * Describes a <code>RevisionTarget</code>.
**/
export class RevisionTargetsList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  databaseRevision?: string;

  @SpeakeasyMetadata()
  databaseRevisionReleaseDate?: Date;

  @SpeakeasyMetadata()
  description?: string;
}
