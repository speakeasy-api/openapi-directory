import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DbInstanceAutomatedBackupsReplicationList
/** 
 * Automated backups of a DB instance replicated to another Amazon Web Services Region. They consist of system backups, transaction logs, and database instance properties.
**/
export class DbInstanceAutomatedBackupsReplicationList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbInstanceAutomatedBackupsArn?: string;
}
