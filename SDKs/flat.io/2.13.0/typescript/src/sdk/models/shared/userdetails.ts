import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClassRolesEnum } from "./classrolesenum";
import { FlatLocalesEnum } from "./flatlocalesenum";
import { OrganizationRolesEnum } from "./organizationrolesenum";


export enum UserDetailsTypeEnum {
    User = "user",
    Guest = "guest"
}


// UserDetails
/** 
 * Public User details summary
**/
export class UserDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bio" })
  bio?: string;

  @SpeakeasyMetadata({ data: "json, name=classRole" })
  classRole?: ClassRolesEnum;

  @SpeakeasyMetadata({ data: "json, name=coverPicture" })
  coverPicture?: string;

  @SpeakeasyMetadata({ data: "json, name=coverPictureFile" })
  coverPictureFile?: string;

  @SpeakeasyMetadata({ data: "json, name=firstname" })
  firstname?: string;

  @SpeakeasyMetadata({ data: "json, name=followersCount" })
  followersCount?: number;

  @SpeakeasyMetadata({ data: "json, name=followingCount" })
  followingCount?: number;

  @SpeakeasyMetadata({ data: "json, name=htmlUrl" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=instruments" })
  instruments?: string[];

  @SpeakeasyMetadata({ data: "json, name=isFlatTeam" })
  isFlatTeam?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isPowerUser" })
  isPowerUser?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastname" })
  lastname?: string;

  @SpeakeasyMetadata({ data: "json, name=likedScoresCount" })
  likedScoresCount?: number;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: FlatLocalesEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization?: string;

  @SpeakeasyMetadata({ data: "json, name=organizationRole" })
  organizationRole?: OrganizationRolesEnum;

  @SpeakeasyMetadata({ data: "json, name=ownedPublicScoresCount" })
  ownedPublicScoresCount?: number;

  @SpeakeasyMetadata({ data: "json, name=picture" })
  picture?: string;

  @SpeakeasyMetadata({ data: "json, name=pictureFile" })
  pictureFile?: string;

  @SpeakeasyMetadata({ data: "json, name=printableName" })
  printableName?: string;

  @SpeakeasyMetadata({ data: "json, name=privateProfile" })
  privateProfile?: boolean;

  @SpeakeasyMetadata({ data: "json, name=profileTheme" })
  profileTheme?: string;

  @SpeakeasyMetadata({ data: "json, name=registrationDate" })
  registrationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UserDetailsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
