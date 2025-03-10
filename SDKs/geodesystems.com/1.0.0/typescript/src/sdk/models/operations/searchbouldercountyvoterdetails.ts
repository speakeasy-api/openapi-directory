/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class SearchBoulderCountyVoterDetailsRequest extends SpeakeasyBase {
  /**
   * Archive change date from
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=changedate.from;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
  })
  changedateFrom?: Date;

  /**
   * Archive change date to
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=changedate.to;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
  })
  changedateTo?: Date;

  /**
   * Archive create date from
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=createdate.from;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
  })
  createdateFrom?: Date;

  /**
   * Archive create date to
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=createdate.to;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
  })
  createdateTo?: Date;

  /**
   * Search description
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=description",
  })
  description?: string;

  /**
   * File suffix
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=filesuffix",
  })
  filesuffix?: string;

  /**
   * From date
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=fromdate;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
  })
  fromdate?: Date;

  /**
   * Parent entry
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: string;

  /**
   * Max number of results
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;

  /**
   * Northern bounds of search
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=maxlatitude",
  })
  maxlatitude?: number;

  /**
   * Eastern bounds of search
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=maxlongitude",
  })
  maxlongitude?: number;

  /**
   * Southern bounds of search
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=minlatitude",
  })
  minlatitude?: number;

  /**
   * Western bounds of search
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=minlongitude",
  })
  minlongitude?: number;

  /**
   * Search name
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  /**
   * Birth Year
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.birth_year",
  })
  searchDbBoulderCountyVoterDetailsBirthYear?: number;

  /**
   * City Ward/district
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.city_ward_district",
  })
  searchDbBoulderCountyVoterDetailsCityWardDistrict?: string;

  /**
   * Congressional
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.congressional",
  })
  searchDbBoulderCountyVoterDetailsCongressional?: string;

  /**
   * First Name
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.first_name",
  })
  searchDbBoulderCountyVoterDetailsFirstName?: string;

  /**
   * Gender
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.gender",
  })
  searchDbBoulderCountyVoterDetailsGender?: string;

  /**
   * Last Name
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.last_name",
  })
  searchDbBoulderCountyVoterDetailsLastName?: string;

  /**
   * Last Updated Date
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.last_updated_date",
  })
  searchDbBoulderCountyVoterDetailsLastUpdatedDate?: string;

  /**
   * Location
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.location",
  })
  searchDbBoulderCountyVoterDetailsLocation?: string;

  /**
   * Mailing Zip Code
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.mailing_zip_code",
  })
  searchDbBoulderCountyVoterDetailsMailingZipCode?: string;

  /**
   * Municipality
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.municipality",
  })
  searchDbBoulderCountyVoterDetailsMunicipality?: string;

  /**
   * Party
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.party",
  })
  searchDbBoulderCountyVoterDetailsParty?: string;

  /**
   * Precinct Code
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.precinct_code",
  })
  searchDbBoulderCountyVoterDetailsPrecinctCode?: string;

  /**
   * Registration Date
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.registration_date",
  })
  searchDbBoulderCountyVoterDetailsRegistrationDate?: string;

  /**
   * Residential Address
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.residential_address",
  })
  searchDbBoulderCountyVoterDetailsResidentialAddress?: string;

  /**
   * Residential City
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.residential_city",
  })
  searchDbBoulderCountyVoterDetailsResidentialCity?: string;

  /**
   * School District
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.school_district",
  })
  searchDbBoulderCountyVoterDetailsSchoolDistrict?: string;

  /**
   * State House
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.state_house",
  })
  searchDbBoulderCountyVoterDetailsStateHouse?: string;

  /**
   * State Senate
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.state_senate",
  })
  searchDbBoulderCountyVoterDetailsStateSenate?: string;

  /**
   * Voter Status
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.voter_status",
  })
  searchDbBoulderCountyVoterDetailsVoterStatus?: string;

  /**
   * Number to skip
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  /**
   * Search text
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  /**
   * To date
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=todate;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
  })
  todate?: Date;
}

export class SearchBoulderCountyVoterDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
