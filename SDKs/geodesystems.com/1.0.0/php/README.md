# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MediaTabularExtractsheetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MediaTabularExtractsheetRequest();
    $request->arg1 = 'corrupti';
    $request->entryid = 'provident';
    $request->output = 'distinctio';

    $response = $sdk->serviceMediaTabularExtractsheet->mediaTabularExtractsheet($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [serviceMediaTabularExtractsheet](docs/servicemediatabularextractsheet/README.md)

* [mediaTabularExtractsheet](docs/servicemediatabularextractsheet/README.md#mediatabularextractsheet) - API for Extract sheets

### [type2017BoulderElectionExpenditures](docs/type2017boulderelectionexpenditures/README.md)

* [search2017BoulderElectionExpenditures](docs/type2017boulderelectionexpenditures/README.md#search2017boulderelectionexpenditures) - Search API for '2017 Boulder Election Expenditures' entry type

### [typeAny](docs/typeany/README.md)

* [searchAny](docs/typeany/README.md#searchany) - Search API for 'Any file type' entry type

### [typeBeforeafter](docs/typebeforeafter/README.md)

* [searchBeforeafter](docs/typebeforeafter/README.md#searchbeforeafter) - Search API for 'Before and After Images' entry type

### [typeBiblio](docs/typebiblio/README.md)

* [searchBiblio](docs/typebiblio/README.md#searchbiblio) - Search API for 'Bibliographic Entry' entry type

### [typeBioDicom](docs/typebiodicom/README.md)

* [searchBioDicom](docs/typebiodicom/README.md#searchbiodicom) - Search API for 'DICOM File' entry type

### [typeBioDicomTest](docs/typebiodicomtest/README.md)

* [searchBioDicomTest](docs/typebiodicomtest/README.md#searchbiodicomtest) - Search API for 'DICOM Test File' entry type

### [typeBioFasta](docs/typebiofasta/README.md)

* [searchBioFasta](docs/typebiofasta/README.md#searchbiofasta) - Search API for 'FASTA File' entry type

### [typeBioFastq](docs/typebiofastq/README.md)

* [searchBioFastq](docs/typebiofastq/README.md#searchbiofastq) - Search API for 'FASTQ File' entry type

### [typeBioHmmerIndex](docs/typebiohmmerindex/README.md)

* [searchBioHmmerIndex](docs/typebiohmmerindex/README.md#searchbiohmmerindex) - Search API for 'HMMER Index File' entry type

### [typeBioOmeTiff](docs/typebioometiff/README.md)

* [searchBioOmeTiff](docs/typebioometiff/README.md#searchbioometiff) - Search API for 'OME TIFF File' entry type

### [typeBioOntologyAssay](docs/typebioontologyassay/README.md)

* [searchBioOntologyAssay](docs/typebioontologyassay/README.md#searchbioontologyassay) - Search API for 'Assay' entry type

### [typeBioOntologyCohort](docs/typebioontologycohort/README.md)

* [searchBioOntologyCohort](docs/typebioontologycohort/README.md#searchbioontologycohort) - Search API for 'Cohort' entry type

### [typeBioOntologyPerson](docs/typebioontologyperson/README.md)

* [searchBioOntologyPerson](docs/typebioontologyperson/README.md#searchbioontologyperson) - Search API for 'Person' entry type

### [typeBioOntologySample](docs/typebioontologysample/README.md)

* [searchBioOntologySample](docs/typebioontologysample/README.md#searchbioontologysample) - Search API for 'Sample' entry type

### [typeBioOntologySeries](docs/typebioontologyseries/README.md)

* [searchBioOntologySeries](docs/typebioontologyseries/README.md#searchbioontologyseries) - Search API for 'Series' entry type

### [typeBioOntologyStudy](docs/typebioontologystudy/README.md)

* [searchBioOntologyStudy](docs/typebioontologystudy/README.md#searchbioontologystudy) - Search API for 'Study' entry type

### [typeBioSam](docs/typebiosam/README.md)

* [searchBioSam](docs/typebiosam/README.md#searchbiosam) - Search API for 'SAM Data' entry type

### [typeBioSfPdb](docs/typebiosfpdb/README.md)

* [searchBioSfPdb](docs/typebiosfpdb/README.md#searchbiosfpdb) - Search API for 'PDB Protein File' entry type

### [typeBioSra](docs/typebiosra/README.md)

* [searchBioSra](docs/typebiosra/README.md#searchbiosra) - Search API for 'Sequence Read Archive' entry type

### [typeBioStockholm](docs/typebiostockholm/README.md)

* [searchBioStockholm](docs/typebiostockholm/README.md#searchbiostockholm) - Search API for 'Stockholm File' entry type

### [typeBioTaxonomy](docs/typebiotaxonomy/README.md)

* [searchBioTaxonomy](docs/typebiotaxonomy/README.md#searchbiotaxonomy) - Search API for 'Taxonomic Entry' entry type

### [typeBlogentry](docs/typeblogentry/README.md)

* [searchBlogentry](docs/typeblogentry/README.md#searchblogentry) - Search API for 'Weblog Entry' entry type

### [typeBolderRentalHousing](docs/typebolderrentalhousing/README.md)

* [searchBolderRentalHousing](docs/typebolderrentalhousing/README.md#searchbolderrentalhousing) - Search API for 'Boulder Rental Housing' entry type

### [typeBookmarks](docs/typebookmarks/README.md)

* [searchBookmarks](docs/typebookmarks/README.md#searchbookmarks) - Search API for 'Bookmarks' entry type

### [typeBostonCrime](docs/typebostoncrime/README.md)

* [searchBostonCrime](docs/typebostoncrime/README.md#searchbostoncrime) - Search API for 'Boston Crime' entry type

### [typeBoulder2017ElectionContributions](docs/typeboulder2017electioncontributions/README.md)

* [searchBoulder2017ElectionContributions](docs/typeboulder2017electioncontributions/README.md#searchboulder2017electioncontributions) - Search API for 'Boulder 2017 Election Contributions' entry type

### [typeBoulderCampaignContributions](docs/typebouldercampaigncontributions/README.md)

* [searchBoulderCampaignContributions](docs/typebouldercampaigncontributions/README.md#searchbouldercampaigncontributions) - Search API for 'Boulder Campaign Contributions' entry type

### [typeBoulderConsultingServices](docs/typeboulderconsultingservices/README.md)

* [searchBoulderConsultingServices](docs/typeboulderconsultingservices/README.md#searchboulderconsultingservices) - Search API for 'Boulder Consulting Services Database' entry type

### [typeBoulderCountyVoterDetails](docs/typebouldercountyvoterdetails/README.md)

* [searchBoulderCountyVoterDetails](docs/typebouldercountyvoterdetails/README.md#searchbouldercountyvoterdetails) - Search API for 'Boulder County Voter Details' entry type

### [typeBoulderCrimes](docs/typebouldercrimes/README.md)

* [searchBoulderCrimes](docs/typebouldercrimes/README.md#searchbouldercrimes) - Search API for 'Boulder Crime Reports' entry type

### [typeBoulderEmails](docs/typeboulderemails/README.md)

* [searchBoulderEmails](docs/typeboulderemails/README.md#searchboulderemails) - Search API for 'Boulder Council Emails' entry type

### [typeBoulderEmployeeSalaries](docs/typeboulderemployeesalaries/README.md)

* [searchBoulderEmployeeSalaries](docs/typeboulderemployeesalaries/README.md#searchboulderemployeesalaries) - Search API for 'Boulder Employee Salaries' entry type

### [typeCalendar](docs/typecalendar/README.md)

* [searchCalendar](docs/typecalendar/README.md#searchcalendar) - Search API for 'Calendar' entry type

### [typeCampaignDonors](docs/typecampaigndonors/README.md)

* [searchCampaignDonors](docs/typecampaigndonors/README.md#searchcampaigndonors) - Search API for 'Campaign Donors' entry type

### [typeCampaignExpenditures](docs/typecampaignexpenditures/README.md)

* [searchCampaignExpenditures](docs/typecampaignexpenditures/README.md#searchcampaignexpenditures) - Search API for 'Campaign Expenditures' entry type

### [typeCataloglink](docs/typecataloglink/README.md)

* [searchCataloglink](docs/typecataloglink/README.md#searchcataloglink) - Search API for 'Catalog Link' entry type

### [typeCdmGrid](docs/typecdmgrid/README.md)

* [searchCdmGrid](docs/typecdmgrid/README.md#searchcdmgrid) - Search API for 'Gridded Data File' entry type

### [typeChatroom](docs/typechatroom/README.md)

* [searchChatroom](docs/typechatroom/README.md#searchchatroom) - Search API for 'Chat Room' entry type

### [typeColoradoWaterRights](docs/typecoloradowaterrights/README.md)

* [searchColoradoWaterRights](docs/typecoloradowaterrights/README.md#searchcoloradowaterrights) - Search API for 'Colorado Water Rights' entry type

### [typeCommitteeDonations](docs/typecommitteedonations/README.md)

* [searchCommitteeDonations](docs/typecommitteedonations/README.md#searchcommitteedonations) - Search API for 'Committee Donations' entry type

### [typeCommunityDatahub](docs/typecommunitydatahub/README.md)

* [searchCommunityDatahub](docs/typecommunitydatahub/README.md#searchcommunitydatahub) - Search API for 'Data Hub' entry type

### [typeCommunityResource](docs/typecommunityresource/README.md)

* [searchCommunityResource](docs/typecommunityresource/README.md#searchcommunityresource) - Search API for 'Facility' entry type

### [typeConstructionPermits](docs/typeconstructionpermits/README.md)

* [searchConstructionPermits](docs/typeconstructionpermits/README.md#searchconstructionpermits) - Search API for 'Construction Permits' entry type

### [typeContact](docs/typecontact/README.md)

* [searchContact](docs/typecontact/README.md#searchcontact) - Search API for 'Contact List' entry type

### [typeDbCoIndicators](docs/typedbcoindicators/README.md)

* [searchDbCoIndicators](docs/typedbcoindicators/README.md#searchdbcoindicators) - Search API for 'Colorado Health Indicators' entry type

### [typeEarthSatelliteLandsat](docs/typeearthsatellitelandsat/README.md)

* [searchEarthSatelliteLandsat](docs/typeearthsatellitelandsat/README.md#searchearthsatellitelandsat) - Search API for 'Landsat Satellite Data' entry type

### [typeFaq](docs/typefaq/README.md)

* [searchFaq](docs/typefaq/README.md#searchfaq) - Search API for 'FAQ' entry type

### [typeFecPacs](docs/typefecpacs/README.md)

* [searchFecPacs](docs/typefecpacs/README.md#searchfecpacs) - Search API for 'FEC PACs' entry type

### [typeFeccandidates](docs/typefeccandidates/README.md)

* [searchFeccandidates](docs/typefeccandidates/README.md#searchfeccandidates) - Search API for 'Candidates' entry type

### [typeFeed](docs/typefeed/README.md)

* [searchFeed](docs/typefeed/README.md#searchfeed) - Search API for 'RSS/ATOM Feed' entry type

### [typeFile](docs/typefile/README.md)

* [searchFile](docs/typefile/README.md#searchfile) - Search API for 'File' entry type

### [typeFitsData](docs/typefitsdata/README.md)

* [searchFitsData](docs/typefitsdata/README.md#searchfitsdata) - Search API for 'FITS Data File' entry type

### [typeFtp](docs/typeftp/README.md)

* [searchFtp](docs/typeftp/README.md#searchftp) - Search API for 'Remote FTP File View' entry type

### [typeGadgetsCountdown](docs/typegadgetscountdown/README.md)

* [searchGadgetsCountdown](docs/typegadgetscountdown/README.md#searchgadgetscountdown) - Search API for 'Countdown' entry type

### [typeGadgetsStock](docs/typegadgetsstock/README.md)

* [searchGadgetsStock](docs/typegadgetsstock/README.md#searchgadgetsstock) - Search API for 'Stock Ticker' entry type

### [typeGadgetsWeather](docs/typegadgetsweather/README.md)

* [searchGadgetsWeather](docs/typegadgetsweather/README.md#searchgadgetsweather) - Search API for 'Weather' entry type

### [typeGazeteerCensusTracts](docs/typegazeteercensustracts/README.md)

* [searchGazeteerCensusTracts](docs/typegazeteercensustracts/README.md#searchgazeteercensustracts) - Search API for 'Census Tracts' entry type

### [typeGazeteerCounties](docs/typegazeteercounties/README.md)

* [searchGazeteerCounties](docs/typegazeteercounties/README.md#searchgazeteercounties) - Search API for 'Census Gazeteer Counties' entry type

### [typeGeoGe](docs/typegeoge/README.md)

* [searchGeoGeojson](docs/typegeoge/README.md#searchgeogeojson) - Search API for 'GeoJson File' entry type

### [typeGeoGeotiff](docs/typegeogeotiff/README.md)

* [searchGeoGeotiff](docs/typegeogeotiff/README.md#searchgeogeotiff) - Search API for 'GeoTIFF' entry type

### [typeGeoGpx](docs/typegeogpx/README.md)

* [searchGeoGpx](docs/typegeogpx/README.md#searchgeogpx) - Search API for 'GPX GPS File' entry type

### [typeGeoHdf5](docs/typegeohdf5/README.md)

* [searchGeoHdf5](docs/typegeohdf5/README.md#searchgeohdf5) - Search API for 'HDF5 File' entry type

### [typeGeoKml](docs/typegeokml/README.md)

* [searchGeoKml](docs/typegeokml/README.md#searchgeokml) - Search API for 'KML/KMZ File' entry type

### [typeGeoShapefile](docs/typegeoshapefile/README.md)

* [searchGeoShapefile](docs/typegeoshapefile/README.md#searchgeoshapefile) - Search API for 'Shapefile' entry type

### [typeGeoShapefileFips](docs/typegeoshapefilefips/README.md)

* [searchGeoShapefileFips](docs/typegeoshapefilefips/README.md#searchgeoshapefilefips) - Search API for 'Shapefile with FIPS Code' entry type

### [typeGlossary](docs/typeglossary/README.md)

* [searchGlossary](docs/typeglossary/README.md#searchglossary) - Search API for 'Glossary' entry type

### [typeGridaggregation](docs/typegridaggregation/README.md)

* [searchGridaggregation](docs/typegridaggregation/README.md#searchgridaggregation) - Search API for 'Grid Aggregation' entry type

### [typeGroup](docs/typegroup/README.md)

* [searchGroup](docs/typegroup/README.md#searchgroup) - Search API for 'Folder' entry type

### [typeHipchatGroup](docs/typehipchatgroup/README.md)

* [searchHipchatGroup](docs/typehipchatgroup/README.md#searchhipchatgroup) - Search API for 'HipChat Group' entry type

### [typeHomepage](docs/typehomepage/README.md)

* [searchHomepage](docs/typehomepage/README.md#searchhomepage) - Search API for 'Home Page' entry type

### [typeIncident](docs/typeincident/README.md)

* [searchIncident](docs/typeincident/README.md#searchincident) - Search API for 'Incident' entry type

### [typeJeopardy](docs/typejeopardy/README.md)

* [searchJeopardy](docs/typejeopardy/README.md#searchjeopardy) - Search API for 'Jeopardy' entry type

### [typeLatlonimage](docs/typelatlonimage/README.md)

* [searchLatlonimage](docs/typelatlonimage/README.md#searchlatlonimage) - Search API for 'Lat-Lon Image' entry type

### [typeLidarCollection](docs/typelidarcollection/README.md)

* [searchLidarCollection](docs/typelidarcollection/README.md#searchlidarcollection) - Search API for 'LiDAR Collection' entry type

### [typeLidarLas](docs/typelidarlas/README.md)

* [searchLidarLas](docs/typelidarlas/README.md#searchlidarlas) - Search API for 'LAS Lidar Data' entry type

### [typeLidarLvis](docs/typelidarlvis/README.md)

* [searchLidarLvis](docs/typelidarlvis/README.md#searchlidarlvis) - Search API for 'LVIS Lidar Data' entry type

### [typeLink](docs/typelink/README.md)

* [searchLink](docs/typelink/README.md#searchlink) - Search API for 'Link' entry type

### [typeLocalfiles](docs/typelocalfiles/README.md)

* [searchLocalfiles](docs/typelocalfiles/README.md#searchlocalfiles) - Search API for 'Server Side Files' entry type

### [typeLocations](docs/typelocations/README.md)

* [searchLocations](docs/typelocations/README.md#searchlocations) - Search API for 'Locations' entry type

### [typeMapGooglemap](docs/typemapgooglemap/README.md)

* [searchMapGooglemap](docs/typemapgooglemap/README.md#searchmapgooglemap) - Search API for 'Google Map URL' entry type

### [typeMediaAudiofile](docs/typemediaaudiofile/README.md)

* [searchMediaAudiofile](docs/typemediaaudiofile/README.md#searchmediaaudiofile) - Search API for 'Audio File' entry type

### [typeMediaImageloop](docs/typemediaimageloop/README.md)

* [searchMediaImageloop](docs/typemediaimageloop/README.md#searchmediaimageloop) - Search API for 'Image Loop' entry type

### [typeMediaPhotoalbum](docs/typemediaphotoalbum/README.md)

* [searchMediaPhotoalbum](docs/typemediaphotoalbum/README.md#searchmediaphotoalbum) - Search API for 'Photo Album' entry type

### [typeMediaVideoChannel](docs/typemediavideochannel/README.md)

* [searchMediaVideoChannel](docs/typemediavideochannel/README.md#searchmediavideochannel) - Search API for 'Video Channel' entry type

### [typeMediaVideoQuicktime](docs/typemediavideoquicktime/README.md)

* [searchMediaVideoQuicktime](docs/typemediavideoquicktime/README.md#searchmediavideoquicktime) - Search API for 'Quicktime Video' entry type

### [typeMediaYoutubevideo](docs/typemediayoutubevideo/README.md)

* [searchMediaYoutubevideo](docs/typemediayoutubevideo/README.md#searchmediayoutubevideo) - Search API for 'YouTube Video' entry type

### [typeNotes](docs/typenotes/README.md)

* [searchNotes](docs/typenotes/README.md#searchnotes) - Search API for 'Notes' entry type

### [typeNotesJsonfile](docs/typenotesjsonfile/README.md)

* [searchNotesJsonfile](docs/typenotesjsonfile/README.md#searchnotesjsonfile) - Search API for 'Json File' entry type

### [typeNotesNote](docs/typenotesnote/README.md)

* [searchNotesNote](docs/typenotesnote/README.md#searchnotesnote) - Search API for 'Note' entry type

### [typeNotesNotebook](docs/typenotesnotebook/README.md)

* [searchNotesNotebook](docs/typenotesnotebook/README.md#searchnotesnotebook) - Search API for 'Notebook' entry type

### [typeNwsfeed](docs/typenwsfeed/README.md)

* [searchNwsfeed](docs/typenwsfeed/README.md#searchnwsfeed) - Search API for 'NWS Forecast Feed' entry type

### [typeOpendaplink](docs/typeopendaplink/README.md)

* [searchOpendaplink](docs/typeopendaplink/README.md#searchopendaplink) - Search API for 'OPeNDAP Link' entry type

### [typeOwlClass](docs/typeowlclass/README.md)

* [searchOwlClass](docs/typeowlclass/README.md#searchowlclass) - Search API for 'OWL Class' entry type

### [typeOwlOntology](docs/typeowlontology/README.md)

* [searchOwlOntology](docs/typeowlontology/README.md#searchowlontology) - Search API for 'OWL Ontology' entry type

### [typePasteitentry](docs/typepasteitentry/README.md)

* [searchPasteitentry](docs/typepasteitentry/README.md#searchpasteitentry) - Search API for 'Paste Text Entry' entry type

### [typePointText](docs/typepointtext/README.md)

* [searchPointText](docs/typepointtext/README.md#searchpointtext) - Search API for 'Text Point Data' entry type

### [typePoliceStopData](docs/typepolicestopdata/README.md)

* [searchPoliceStopData](docs/typepolicestopdata/README.md#searchpolicestopdata) - Search API for 'Police Stop Data' entry type

### [typePoll](docs/typepoll/README.md)

* [searchPoll](docs/typepoll/README.md#searchpoll) - Search API for 'Poll' entry type

### [typeProjectCampaign](docs/typeprojectcampaign/README.md)

* [searchProjectCampaign](docs/typeprojectcampaign/README.md#searchprojectcampaign) - Search API for 'Campaign' entry type

### [typeProjectCasestudy](docs/typeprojectcasestudy/README.md)

* [searchProjectCasestudy](docs/typeprojectcasestudy/README.md#searchprojectcasestudy) - Search API for 'Case Study' entry type

### [typeProjectContribution](docs/typeprojectcontribution/README.md)

* [searchProjectContribution](docs/typeprojectcontribution/README.md#searchprojectcontribution) - Search API for 'Research Contribution' entry type

### [typeProjectDataformat](docs/typeprojectdataformat/README.md)

* [searchProjectDataformat](docs/typeprojectdataformat/README.md#searchprojectdataformat) - Search API for 'Data Format' entry type

### [typeProjectDataset](docs/typeprojectdataset/README.md)

* [searchProjectDataset](docs/typeprojectdataset/README.md#searchprojectdataset) - Search API for 'Dataset' entry type

### [typeProjectDeployment](docs/typeprojectdeployment/README.md)

* [searchProjectDeployment](docs/typeprojectdeployment/README.md#searchprojectdeployment) - Search API for 'Deployment' entry type

### [typeProjectExperiment](docs/typeprojectexperiment/README.md)

* [searchProjectExperiment](docs/typeprojectexperiment/README.md#searchprojectexperiment) - Search API for 'Experiment' entry type

### [typeProjectFieldnote](docs/typeprojectfieldnote/README.md)

* [searchProjectFieldnote](docs/typeprojectfieldnote/README.md#searchprojectfieldnote) - Search API for 'Field Note' entry type

### [typeProjectGpsControlpoints](docs/typeprojectgpscontrolpoints/README.md)

* [searchProjectGpsControlpoints](docs/typeprojectgpscontrolpoints/README.md#searchprojectgpscontrolpoints) - Search API for 'Control Points File' entry type

### [typeProjectGpsRaw](docs/typeprojectgpsraw/README.md)

* [searchProjectGpsRaw](docs/typeprojectgpsraw/README.md#searchprojectgpsraw) - Search API for 'Raw GPS File' entry type

### [typeProjectGpsRinex](docs/typeprojectgpsrinex/README.md)

* [searchProjectGpsRinex](docs/typeprojectgpsrinex/README.md#searchprojectgpsrinex) - Search API for 'RINEX File' entry type

### [typeProjectInstrument](docs/typeprojectinstrument/README.md)

* [searchProjectInstrument](docs/typeprojectinstrument/README.md#searchprojectinstrument) - Search API for 'Instrument Data Collection' entry type

### [typeProjectLearningResource](docs/typeprojectlearningresource/README.md)

* [searchProjectLearningResource](docs/typeprojectlearningresource/README.md#searchprojectlearningresource) - Search API for 'Teaching Resource' entry type

### [typeProjectMeeting](docs/typeprojectmeeting/README.md)

* [searchProjectMeeting](docs/typeprojectmeeting/README.md#searchprojectmeeting) - Search API for 'Meeting' entry type

### [typeProjectOrganization](docs/typeprojectorganization/README.md)

* [searchProjectOrganization](docs/typeprojectorganization/README.md#searchprojectorganization) - Search API for 'Organization' entry type

### [typeProjectProgram](docs/typeprojectprogram/README.md)

* [searchProjectProgram](docs/typeprojectprogram/README.md#searchprojectprogram) - Search API for 'Program' entry type

### [typeProjectProject](docs/typeprojectproject/README.md)

* [searchProjectProject](docs/typeprojectproject/README.md#searchprojectproject) - Search API for 'Project' entry type

### [typeProjectService](docs/typeprojectservice/README.md)

* [searchProjectService](docs/typeprojectservice/README.md#searchprojectservice) - Search API for 'Data Access Service' entry type

### [typeProjectSite](docs/typeprojectsite/README.md)

* [searchProjectSite](docs/typeprojectsite/README.md#searchprojectsite) - Search API for 'Site' entry type

### [typeProjectSoftwarepackage](docs/typeprojectsoftwarepackage/README.md)

* [searchProjectSoftwarepackage](docs/typeprojectsoftwarepackage/README.md#searchprojectsoftwarepackage) - Search API for 'Software Tool' entry type

### [typeProjectStandardName](docs/typeprojectstandardname/README.md)

* [searchProjectStandardName](docs/typeprojectstandardname/README.md#searchprojectstandardname) - Search API for 'Standard Parameter Name' entry type

### [typeProjectSurveylocation](docs/typeprojectsurveylocation/README.md)

* [searchProjectSurveylocation](docs/typeprojectsurveylocation/README.md#searchprojectsurveylocation) - Search API for 'Survey Location' entry type

### [typeProjectTerm](docs/typeprojectterm/README.md)

* [searchProjectTerm](docs/typeprojectterm/README.md#searchprojectterm) - Search API for 'Vocabulary Term' entry type

### [typeProjectVisit](docs/typeprojectvisit/README.md)

* [searchProjectVisit](docs/typeprojectvisit/README.md#searchprojectvisit) - Search API for 'Site Visit' entry type

### [typeProjectVocabulary](docs/typeprojectvocabulary/README.md)

* [searchProjectVocabulary](docs/typeprojectvocabulary/README.md#searchprojectvocabulary) - Search API for 'Vocabulary' entry type

### [typePropertySales](docs/typepropertysales/README.md)

* [searchPropertySales](docs/typepropertysales/README.md#searchpropertysales) - Search API for 'Property Sales' entry type

### [typePropertydb](docs/typepropertydb/README.md)

* [searchPropertydb](docs/typepropertydb/README.md#searchpropertydb) - Search API for 'Property Database' entry type

### [typePythonNotebook](docs/typepythonnotebook/README.md)

* [searchPythonNotebook](docs/typepythonnotebook/README.md#searchpythonnotebook) - Search API for 'IPython Notebook file' entry type

### [typeSlackTeam](docs/typeslackteam/README.md)

* [searchSlackTeam](docs/typeslackteam/README.md#searchslackteam) - Search API for 'Slack Team' entry type

### [typeStatusboard](docs/typestatusboard/README.md)

* [searchStatusboard](docs/typestatusboard/README.md#searchstatusboard) - Search API for 'Status Board' entry type

### [typeSunrisesunset](docs/typesunrisesunset/README.md)

* [searchSunrisesunset](docs/typesunrisesunset/README.md#searchsunrisesunset) - Search API for 'Sunrise/Sunset Display' entry type

### [typeTasks](docs/typetasks/README.md)

* [searchTasks](docs/typetasks/README.md#searchtasks) - Search API for 'Tasks' entry type

### [typeTmdbmovies](docs/typetmdbmovies/README.md)

* [searchTmdbmovies](docs/typetmdbmovies/README.md#searchtmdbmovies) - Search API for 'Tmdb Movies' entry type

### [typeTodo](docs/typetodo/README.md)

* [searchTodo](docs/typetodo/README.md#searchtodo) - Search API for 'Todo' entry type

### [typeTripEvent](docs/typetripevent/README.md)

* [searchTripEvent](docs/typetripevent/README.md#searchtripevent) - Search API for 'Event' entry type

### [typeTripFlight](docs/typetripflight/README.md)

* [searchTripFlight](docs/typetripflight/README.md#searchtripflight) - Search API for 'Flight Leg' entry type

### [typeTripHotel](docs/typetriphotel/README.md)

* [searchTripHotel](docs/typetriphotel/README.md#searchtriphotel) - Search API for 'Lodging' entry type

### [typeTripReport](docs/typetripreport/README.md)

* [searchTripReport](docs/typetripreport/README.md#searchtripreport) - Search API for 'Trip Report' entry type

### [typeTripTrip](docs/typetriptrip/README.md)

* [searchTripTrip](docs/typetriptrip/README.md#searchtriptrip) - Search API for 'Trip' entry type

### [typeTypeAwcMetar](docs/typetypeawcmetar/README.md)

* [searchTypeAwcMetar](docs/typetypeawcmetar/README.md#searchtypeawcmetar) - Search API for 'AWC Weather Observations' entry type

### [typeTypeBizStockseries](docs/typetypebizstockseries/README.md)

* [searchTypeBizStockseries](docs/typetypebizstockseries/README.md#searchtypebizstockseries) - Search API for 'Stock Ticker Data' entry type

### [typeTypeBlsSeries](docs/typetypeblsseries/README.md)

* [searchTypeBlsSeries](docs/typetypeblsseries/README.md#searchtypeblsseries) - Search API for 'BLS Series' entry type

### [typeTypeBlsSurvey](docs/typetypeblssurvey/README.md)

* [searchTypeBlsSurvey](docs/typetypeblssurvey/README.md#searchtypeblssurvey) - Search API for 'BLS Survey' entry type

### [typeTypeCensusAcs](docs/typetypecensusacs/README.md)

* [searchTypeCensusAcs](docs/typetypecensusacs/README.md#searchtypecensusacs) - Search API for 'US Census ACS Data' entry type

### [typeTypeDaymet](docs/typetypedaymet/README.md)

* [searchTypeDaymet](docs/typetypedaymet/README.md#searchtypedaymet) - Search API for 'Daymet Daily Weather' entry type

### [typeTypeDbTable](docs/typetypedbtable/README.md)

* [searchTypeDbTable](docs/typetypedbtable/README.md#searchtypedbtable) - Search API for 'Database Table' entry type

### [typeTypeDocumentCsv](docs/typetypedocumentcsv/README.md)

* [searchTypeDocumentCsv](docs/typetypedocumentcsv/README.md#searchtypedocumentcsv) - Search API for 'CSV File' entry type

### [typeTypeDocumentDoc](docs/typetypedocumentdoc/README.md)

* [searchTypeDocumentDoc](docs/typetypedocumentdoc/README.md#searchtypedocumentdoc) - Search API for 'Word File' entry type

### [typeTypeDocumentHtml](docs/typetypedocumenthtml/README.md)

* [searchTypeDocumentHtml](docs/typetypedocumenthtml/README.md#searchtypedocumenthtml) - Search API for 'HTML File' entry type

### [typeTypeDocumentPdf](docs/typetypedocumentpdf/README.md)

* [searchTypeDocumentPdf](docs/typetypedocumentpdf/README.md#searchtypedocumentpdf) - Search API for 'PDF File' entry type

### [typeTypeDocumentPpt](docs/typetypedocumentppt/README.md)

* [searchTypeDocumentPpt](docs/typetypedocumentppt/README.md#searchtypedocumentppt) - Search API for 'Powerpoint File' entry type

### [typeTypeDocumentXls](docs/typetypedocumentxls/README.md)

* [searchTypeDocumentXls](docs/typetypedocumentxls/README.md#searchtypedocumentxls) - Search API for 'Excel File' entry type

### [typeTypeDrilsdownCasestudy](docs/typetypedrilsdowncasestudy/README.md)

* [searchTypeDrilsdownCasestudy](docs/typetypedrilsdowncasestudy/README.md#searchtypedrilsdowncasestudy) - Search API for 'Drilsdown Case Study' entry type

### [typeTypeEdgarFiling](docs/typetypeedgarfiling/README.md)

* [searchTypeEdgarFiling](docs/typetypeedgarfiling/README.md#searchtypeedgarfiling) - Search API for 'SEC EDGAR Filing' entry type

### [typeTypeEiaCategory](docs/typetypeeiacategory/README.md)

* [searchTypeEiaCategory](docs/typetypeeiacategory/README.md#searchtypeeiacategory) - Search API for 'EIA Category' entry type

### [typeTypeEiaSeries](docs/typetypeeiaseries/README.md)

* [searchTypeEiaSeries](docs/typetypeeiaseries/README.md#searchtypeeiaseries) - Search API for 'EIA Series' entry type

### [typeTypeEsriFeatureserver](docs/typetypeesrifeatureserver/README.md)

* [searchTypeEsriFeatureserver](docs/typetypeesrifeatureserver/README.md#searchtypeesrifeatureserver) - Search API for 'ESRI Feature Server' entry type

### [typeTypeEsriGeometryserver](docs/typetypeesrigeometryserver/README.md)

* [searchTypeEsriGeometryserver](docs/typetypeesrigeometryserver/README.md#searchtypeesrigeometryserver) - Search API for 'ESRI Geometry Server' entry type

### [typeTypeEsriGpserver](docs/typetypeesrigpserver/README.md)

* [searchTypeEsriGpserver](docs/typetypeesrigpserver/README.md#searchtypeesrigpserver) - Search API for 'ESRI GP Server' entry type

### [typeTypeEsriImageserver](docs/typetypeesriimageserver/README.md)

* [searchTypeEsriImageserver](docs/typetypeesriimageserver/README.md#searchtypeesriimageserver) - Search API for 'ESRI Image Server' entry type

### [typeTypeEsriLayer](docs/typetypeesrilayer/README.md)

* [searchTypeEsriLayer](docs/typetypeesrilayer/README.md#searchtypeesrilayer) - Search API for 'ESRI Layer' entry type

### [typeTypeEsriMapserver](docs/typetypeesrimapserver/README.md)

* [searchTypeEsriMapserver](docs/typetypeesrimapserver/README.md#searchtypeesrimapserver) - Search API for 'ESRI Map Server' entry type

### [typeTypeEsriRestfolder](docs/typetypeesrirestfolder/README.md)

* [searchTypeEsriRestfolder](docs/typetypeesrirestfolder/README.md#searchtypeesrirestfolder) - Search API for 'ESRI Services Folder' entry type

### [typeTypeEsriRestserver](docs/typetypeesrirestserver/README.md)

* [searchTypeEsriRestserver](docs/typetypeesrirestserver/README.md#searchtypeesrirestserver) - Search API for 'ESRI Web Server' entry type

### [typeTypeEsriRestservice](docs/typetypeesrirestservice/README.md)

* [searchTypeEsriRestservice](docs/typetypeesrirestservice/README.md#searchtypeesrirestservice) - Search API for 'ESRI Rest Service' entry type

### [typeTypeExtremes](docs/typetypeextremes/README.md)

* [searchTypeExtremes](docs/typetypeextremes/README.md#searchtypeextremes) - Search API for 'NOAA Extremes Data' entry type

### [typeTypeFredCategory](docs/typetypefredcategory/README.md)

* [searchTypeFredCategory](docs/typetypefredcategory/README.md#searchtypefredcategory) - Search API for 'FRED Category' entry type

### [typeTypeFredSeries](docs/typetypefredseries/README.md)

* [searchTypeFredSeries](docs/typetypefredseries/README.md#searchtypefredseries) - Search API for 'FRED Series' entry type

### [typeTypeGtfsAgency](docs/typetypegtfsagency/README.md)

* [searchTypeGtfsAgency](docs/typetypegtfsagency/README.md#searchtypegtfsagency) - Search API for 'Transit Agency' entry type

### [typeTypeGtfsRoute](docs/typetypegtfsroute/README.md)

* [searchTypeGtfsRoute](docs/typetypegtfsroute/README.md#searchtypegtfsroute) - Search API for 'Transit Route' entry type

### [typeTypeGtfsRoutes](docs/typetypegtfsroutes/README.md)

* [searchTypeGtfsRoutes](docs/typetypegtfsroutes/README.md#searchtypegtfsroutes) - Search API for 'Transit Route Collection' entry type

### [typeTypeGtfsStop](docs/typetypegtfsstop/README.md)

* [searchTypeGtfsStop](docs/typetypegtfsstop/README.md#searchtypegtfsstop) - Search API for 'Transit Stop' entry type

### [typeTypeGtfsStops](docs/typetypegtfsstops/README.md)

* [searchTypeGtfsStops](docs/typetypegtfsstops/README.md#searchtypegtfsstops) - Search API for 'Transit Stop Collection' entry type

### [typeTypeGtfsTrip](docs/typetypegtfstrip/README.md)

* [searchTypeGtfsTrip](docs/typetypegtfstrip/README.md#searchtypegtfstrip) - Search API for 'Transit Trip' entry type

### [typeTypeHazarddata](docs/typetypehazarddata/README.md)

* [searchTypeHazarddata](docs/typetypehazarddata/README.md#searchtypehazarddata) - Search API for 'Hazard Data' entry type

### [typeTypeHydroColorado](docs/typetypehydrocolorado/README.md)

* [searchTypeHydroColorado](docs/typetypehydrocolorado/README.md#searchtypehydrocolorado) - Search API for 'Colorado DNR Stream Gage' entry type

### [typeTypeIdvBundle](docs/typetypeidvbundle/README.md)

* [searchTypeIdvBundle](docs/typetypeidvbundle/README.md#searchtypeidvbundle) - Search API for 'IDV Bundle' entry type

### [typeTypeImage](docs/typetypeimage/README.md)

* [searchTypeImage](docs/typetypeimage/README.md#searchtypeimage) - Search API for 'Image' entry type

### [typeTypeImageAirport](docs/typetypeimageairport/README.md)

* [searchTypeImageAirport](docs/typetypeimageairport/README.md#searchtypeimageairport) - Search API for 'Airport Image' entry type

### [typeTypeImageWebcam](docs/typetypeimagewebcam/README.md)

* [searchTypeImageWebcam](docs/typetypeimagewebcam/README.md#searchtypeimagewebcam) - Search API for 'Webcam' entry type

### [typeTypeMb](docs/typetypemb/README.md)

* [searchTypeMb](docs/typetypemb/README.md#searchtypemb) - Search API for 'MB Bathymetry' entry type

### [typeTypeMbCollection](docs/typetypembcollection/README.md)

* [searchTypeMbCollection](docs/typetypembcollection/README.md#searchtypembcollection) - Search API for 'Bathymetry Collection' entry type

### [typeTypeMbPointBasic](docs/typetypembpointbasic/README.md)

* [searchTypeMbPointBasic](docs/typetypembpointbasic/README.md#searchtypembpointbasic) - Search API for 'Basic MB point file' entry type

### [typeTypeMetametaDictionary](docs/typetypemetametadictionary/README.md)

* [searchTypeMetametaDictionary](docs/typetypemetametadictionary/README.md#searchtypemetametadictionary) - Search API for 'Metadata Dictionary' entry type

### [typeTypeMetametaField](docs/typetypemetametafield/README.md)

* [searchTypeMetametaField](docs/typetypemetametafield/README.md#searchtypemetametafield) - Search API for 'Metadata Field' entry type

### [typeTypeNasaames](docs/typetypenasaames/README.md)

* [searchTypeNasaames](docs/typetypenasaames/README.md#searchtypenasaames) - Search API for 'NASA AMES File' entry type

### [typeTypeNcss](docs/typetypencss/README.md)

* [searchTypeNcss](docs/typetypencss/README.md#searchtypencss) - Search API for 'NetCDF Point Subset' entry type

### [typeTypeNitf](docs/typetypenitf/README.md)

* [searchTypeNitf](docs/typetypenitf/README.md#searchtypenitf) - Search API for 'NITF File' entry type

### [typeTypePointAmerifluxLevel2](docs/typetypepointamerifluxlevel2/README.md)

* [searchTypePointAmerifluxLevel2](docs/typetypepointamerifluxlevel2/README.md#searchtypepointamerifluxlevel2) - Search API for 'Ameriflux Level 2 CSV File' entry type

### [typeTypePointAmrcFinal](docs/typetypepointamrcfinal/README.md)

* [searchTypePointAmrcFinal](docs/typetypepointamrcfinal/README.md#searchtypepointamrcfinal) - Search API for 'AMRC Final QC Data' entry type

### [typeTypePointAmrcFreewave](docs/typetypepointamrcfreewave/README.md)

* [searchTypePointAmrcFreewave](docs/typetypepointamrcfreewave/README.md#searchtypepointamrcfreewave) - Search API for 'AMRC Freewave  Data' entry type

### [typeTypePointCzo](docs/typetypepointczo/README.md)

* [searchTypePointCzo](docs/typetypepointczo/README.md#searchtypepointczo) - Search API for 'CZO Display File Format' entry type

### [typeTypePointGcnet](docs/typetypepointgcnet/README.md)

* [searchTypePointGcnet](docs/typetypepointgcnet/README.md#searchtypepointgcnet) - Search API for 'GC-Net Point Data' entry type

### [typeTypePointGeomagIaga2002](docs/typetypepointgeomagiaga2002/README.md)

* [searchTypePointGeomagIaga2002](docs/typetypepointgeomagiaga2002/README.md#searchtypepointgeomagiaga2002) - Search API for 'IAGA 2002 Geomagnetism Data' entry type

### [typeTypePointHydroWaterml](docs/typetypepointhydrowaterml/README.md)

* [searchTypePointHydroWaterml](docs/typetypepointhydrowaterml/README.md#searchtypepointhydrowaterml) - Search API for 'WaterML' entry type

### [typeTypePointIcebridgeAtmIcessn](docs/typetypepointicebridgeatmicessn/README.md)

* [searchTypePointIcebridgeAtmIcessn](docs/typetypepointicebridgeatmicessn/README.md#searchtypepointicebridgeatmicessn) - Search API for 'ATM Ice SSN Data' entry type

### [typeTypePointIcebridgeAtmQfit](docs/typetypepointicebridgeatmqfit/README.md)

* [searchTypePointIcebridgeAtmQfit](docs/typetypepointicebridgeatmqfit/README.md#searchtypepointicebridgeatmqfit) - Search API for 'ATM QFIT Data' entry type

### [typeTypePointIcebridgeMccordsIrmcr2](docs/typetypepointicebridgemccordsirmcr2/README.md)

* [searchTypePointIcebridgeMccordsIrmcr2](docs/typetypepointicebridgemccordsirmcr2/README.md#searchtypepointicebridgemccordsirmcr2) - Search API for 'McCords Irmcr2 Data' entry type

### [typeTypePointIcebridgeMccordsIrmcr3](docs/typetypepointicebridgemccordsirmcr3/README.md)

* [searchTypePointIcebridgeMccordsIrmcr3](docs/typetypepointicebridgemccordsirmcr3/README.md#searchtypepointicebridgemccordsirmcr3) - Search API for 'McCords Irmcr3 Data' entry type

### [typeTypePointIcebridgeParis](docs/typetypepointicebridgeparis/README.md)

* [searchTypePointIcebridgeParis](docs/typetypepointicebridgeparis/README.md#searchtypepointicebridgeparis) - Search API for 'Paris Data' entry type

### [typeTypePointIdv](docs/typetypepointidv/README.md)

* [searchTypePointIdv](docs/typetypepointidv/README.md#searchtypepointidv) - Search API for 'IDV Point File' entry type

### [typeTypePointInline](docs/typetypepointinline/README.md)

* [searchTypePointInline](docs/typetypepointinline/README.md#searchtypepointinline) - Search API for 'Inline Point File' entry type

### [typeTypePointNcdcClimate](docs/typetypepointncdcclimate/README.md)

* [searchTypePointNcdcClimate](docs/typetypepointncdcclimate/README.md#searchtypepointncdcclimate) - Search API for 'NC  DC Climate Data' entry type

### [typeTypePointNetcdf](docs/typetypepointnetcdf/README.md)

* [searchTypePointNetcdf](docs/typetypepointnetcdf/README.md#searchtypepointnetcdf) - Search API for 'NetCDF Point File' entry type

### [typeTypePointNoaaCarbon](docs/typetypepointnoaacarbon/README.md)

* [searchTypePointNoaaCarbon](docs/typetypepointnoaacarbon/README.md#searchtypepointnoaacarbon) - Search API for 'NOAA Carbon Measurements' entry type

### [typeTypePointNoaaFlaskEvent](docs/typetypepointnoaaflaskevent/README.md)

* [searchTypePointNoaaFlaskEvent](docs/typetypepointnoaaflaskevent/README.md#searchtypepointnoaaflaskevent) - Search API for 'NOAA Flask Event Measurements' entry type

### [typeTypePointNoaaFlaskMonth](docs/typetypepointnoaaflaskmonth/README.md)

* [searchTypePointNoaaFlaskMonth](docs/typetypepointnoaaflaskmonth/README.md#searchtypepointnoaaflaskmonth) - Search API for 'NOAA Flask Month Measurements' entry type

### [typeTypePointNoaaMadis](docs/typetypepointnoaamadis/README.md)

* [searchTypePointNoaaMadis](docs/typetypepointnoaamadis/README.md#searchtypepointnoaamadis) - Search API for 'NOAA MADIS Point Data' entry type

### [typeTypePointNoaaTower](docs/typetypepointnoaatower/README.md)

* [searchTypePointNoaaTower](docs/typetypepointnoaatower/README.md#searchtypepointnoaatower) - Search API for 'NOAA Tower Network' entry type

### [typeTypePointOceanCnv](docs/typetypepointoceancnv/README.md)

* [searchTypePointOceanCnv](docs/typetypepointoceancnv/README.md#searchtypepointoceancnv) - Search API for 'SeaBird CNV Data' entry type

### [typeTypePointOceanCsvSadoTTS](docs/typetypepointoceancsvsadotts/README.md)

* [searchTypePointOceanCsvSadoTTS](docs/typetypepointoceancsvsadotts/README.md#searchtypepointoceancsvsadotts) - Search API for 'SADO TTS Data' entry type

### [typeTypePointOceanCsvSadoMeteo](docs/typetypepointoceancsvsadometeo/README.md)

* [searchTypePointOceanCsvSadoMeteo](docs/typetypepointoceancsvsadometeo/README.md#searchtypepointoceancsvsadometeo) - Search API for 'SADO Meteo Data' entry type

### [typeTypePointOceanCsvSadoPosition](docs/typetypepointoceancsvsadoposition/README.md)

* [searchTypePointOceanCsvSadoPosition](docs/typetypepointoceancsvsadoposition/README.md#searchtypepointoceancsvsadoposition) - Search API for 'SADO Position Data' entry type

### [typeTypePointOceanNetcdfGlider](docs/typetypepointoceannetcdfglider/README.md)

* [searchTypePointOceanNetcdfGlider](docs/typetypepointoceannetcdfglider/README.md#searchtypepointoceannetcdfglider) - Search API for 'NetCDF Glider Data' entry type

### [typeTypePointOceanNetcdfTrack](docs/typetypepointoceannetcdftrack/README.md)

* [searchTypePointOceanNetcdfTrack](docs/typetypepointoceannetcdftrack/README.md#searchtypepointoceannetcdftrack) - Search API for 'NetCDF Track Data' entry type

### [typeTypePointOceanOoiDmgx](docs/typetypepointoceanooidmgx/README.md)

* [searchTypePointOceanOoiDmgx](docs/typetypepointoceanooidmgx/README.md#searchtypepointoceanooidmgx) - Search API for 'OOI Data' entry type

### [typeTypePointOpenaq](docs/typetypepointopenaq/README.md)

* [searchTypePointOpenaq](docs/typetypepointopenaq/README.md#searchtypepointopenaq) - Search API for 'Open AQ Air Quality' entry type

### [typeTypePointPboPositionTimeSeries](docs/typetypepointpbopositiontimeseries/README.md)

* [searchTypePointPboPositionTimeSeries](docs/typetypepointpbopositiontimeseries/README.md#searchtypepointpbopositiontimeseries) - Search API for 'PBO Position Time Series' entry type

### [typeTypePointSimpleRecords](docs/typetypepointsimplerecords/README.md)

* [searchTypePointSimpleRecords](docs/typetypepointsimplerecords/README.md#searchtypepointsimplerecords) - Search API for 'Simple Records' entry type

### [typeTypePointSnotel](docs/typetypepointsnotel/README.md)

* [searchTypePointSnotel](docs/typetypepointsnotel/README.md#searchtypepointsnotel) - Search API for 'SNOTEL Snow Data' entry type

### [typeTypePointText](docs/typetypepointtext/README.md)

* [searchTypePointText](docs/typetypepointtext/README.md#searchtypepointtext) - Search API for 'Record Text File' entry type

### [typeTypePointWsbbGgp](docs/typetypepointwsbbggp/README.md)

* [searchTypePointWsbbGgp](docs/typetypepointwsbbggp/README.md#searchtypepointwsbbggp) - Search API for 'Global Geodynamics GGP Format' entry type

### [typeTypePsdMonthlyClimateIndex](docs/typetypepsdmonthlyclimateindex/README.md)

* [searchTypePsdMonthlyClimateIndex](docs/typetypepsdmonthlyclimateindex/README.md#searchtypepsdmonthlyclimateindex) - Search API for 'NOAA-ESRL-PSD Monthly Climate Index' entry type

### [typeTypeQuandlSeries](docs/typetypequandlseries/README.md)

* [searchTypeQuandlSeries](docs/typetypequandlseries/README.md#searchtypequandlseries) - Search API for 'QUANDL Series' entry type

### [typeTypeServiceGroup](docs/typetypeservicegroup/README.md)

* [searchTypeServiceGroup](docs/typetypeservicegroup/README.md#searchtypeservicegroup) - Search API for 'Service Group' entry type

### [typeTypeServiceLink](docs/typetypeservicelink/README.md)

* [searchTypeServiceLink](docs/typetypeservicelink/README.md#searchtypeservicelink) - Search API for 'Service Link' entry type

### [typeTypeSocrataSeries](docs/typetypesocrataseries/README.md)

* [searchTypeSocrataSeries](docs/typetypesocrataseries/README.md#searchtypesocrataseries) - Search API for 'SOCRATA Series' entry type

### [typeTypeSoundingCod](docs/typetypesoundingcod/README.md)

* [searchTypeSoundingCod](docs/typetypesoundingcod/README.md#searchtypesoundingcod) - Search API for 'COD Sounding' entry type

### [typeTypeSoundingFrd](docs/typetypesoundingfrd/README.md)

* [searchTypeSoundingFrd](docs/typetypesoundingfrd/README.md#searchtypesoundingfrd) - Search API for 'FRD Sounding' entry type

### [typeTypeSoundingGsd](docs/typetypesoundinggsd/README.md)

* [searchTypeSoundingGsd](docs/typetypesoundinggsd/README.md#searchtypesoundinggsd) - Search API for 'GSD Sounding' entry type

### [typeTypeSoundingWyoming](docs/typetypesoundingwyoming/README.md)

* [searchTypeSoundingWyoming](docs/typetypesoundingwyoming/README.md#searchtypesoundingwyoming) - Search API for 'UW Sounding' entry type

### [typeTypeTmy](docs/typetypetmy/README.md)

* [searchTypeTmy](docs/typetypetmy/README.md#searchtypetmy) - Search API for 'NREL TMY Data' entry type

### [typeTypeTweet](docs/typetypetweet/README.md)

* [searchTypeTweet](docs/typetypetweet/README.md#searchtypetweet) - Search API for 'Tweet' entry type

### [typeTypeUsgsGauge](docs/typetypeusgsgauge/README.md)

* [searchTypeUsgsGauge](docs/typetypeusgsgauge/README.md#searchtypeusgsgauge) - Search API for 'USGS Stream Gauge' entry type

### [typeTypeVirtual](docs/typetypevirtual/README.md)

* [searchTypeVirtual](docs/typetypevirtual/README.md#searchtypevirtual) - Search API for 'Virtual Group' entry type

### [typeTypeWmsCapabilities](docs/typetypewmscapabilities/README.md)

* [searchTypeWmsCapabilities](docs/typetypewmscapabilities/README.md#searchtypewmscapabilities) - Search API for 'WMS Capabilities' entry type

### [typeTypeWmsLayer](docs/typetypewmslayer/README.md)

* [searchTypeWmsLayer](docs/typetypewmslayer/README.md#searchtypewmslayer) - Search API for 'WMS Layer' entry type

### [typeUfoSightings](docs/typeufosightings/README.md)

* [searchUfoSightings](docs/typeufosightings/README.md#searchufosightings) - Search API for 'Ufo Sightings' entry type

### [typeUsPlaces](docs/typeusplaces/README.md)

* [searchUsPlaces](docs/typeusplaces/README.md#searchusplaces) - Search API for 'US Places' entry type

### [typeVoteYesno](docs/typevoteyesno/README.md)

* [searchVoteYesno](docs/typevoteyesno/README.md#searchvoteyesno) - Search API for 'Simple Yes-No Vote' entry type

### [typeWeblog](docs/typeweblog/README.md)

* [searchWeblog](docs/typeweblog/README.md#searchweblog) - Search API for 'Weblog' entry type

### [typeWikipage](docs/typewikipage/README.md)

* [searchWikipage](docs/typewikipage/README.md#searchwikipage) - Search API for 'Wiki Page' entry type
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
