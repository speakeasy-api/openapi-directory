# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/geodesystems.com/1.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ServiceMediaTabularExtractsheet.MediaTabularExtractsheet(ctx, operations.MediaTabularExtractsheetRequest{
        Arg1: sdk.String("corrupti"),
        Entryid: "provident",
        Output: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [ServiceMediaTabularExtractsheet](docs/servicemediatabularextractsheet/README.md)

* [MediaTabularExtractsheet](docs/servicemediatabularextractsheet/README.md#mediatabularextractsheet) - API for Extract sheets

### [Type2017BoulderElectionExpenditures](docs/type2017boulderelectionexpenditures/README.md)

* [Search2017BoulderElectionExpenditures](docs/type2017boulderelectionexpenditures/README.md#search2017boulderelectionexpenditures) - Search API for '2017 Boulder Election Expenditures' entry type

### [TypeAny](docs/typeany/README.md)

* [SearchAny](docs/typeany/README.md#searchany) - Search API for 'Any file type' entry type

### [TypeBeforeafter](docs/typebeforeafter/README.md)

* [SearchBeforeafter](docs/typebeforeafter/README.md#searchbeforeafter) - Search API for 'Before and After Images' entry type

### [TypeBiblio](docs/typebiblio/README.md)

* [SearchBiblio](docs/typebiblio/README.md#searchbiblio) - Search API for 'Bibliographic Entry' entry type

### [TypeBioDicom](docs/typebiodicom/README.md)

* [SearchBioDicom](docs/typebiodicom/README.md#searchbiodicom) - Search API for 'DICOM File' entry type

### [TypeBioDicomTest](docs/typebiodicomtest/README.md)

* [SearchBioDicomTest](docs/typebiodicomtest/README.md#searchbiodicomtest) - Search API for 'DICOM Test File' entry type

### [TypeBioFasta](docs/typebiofasta/README.md)

* [SearchBioFasta](docs/typebiofasta/README.md#searchbiofasta) - Search API for 'FASTA File' entry type

### [TypeBioFastq](docs/typebiofastq/README.md)

* [SearchBioFastq](docs/typebiofastq/README.md#searchbiofastq) - Search API for 'FASTQ File' entry type

### [TypeBioHmmerIndex](docs/typebiohmmerindex/README.md)

* [SearchBioHmmerIndex](docs/typebiohmmerindex/README.md#searchbiohmmerindex) - Search API for 'HMMER Index File' entry type

### [TypeBioOmeTiff](docs/typebioometiff/README.md)

* [SearchBioOmeTiff](docs/typebioometiff/README.md#searchbioometiff) - Search API for 'OME TIFF File' entry type

### [TypeBioOntologyAssay](docs/typebioontologyassay/README.md)

* [SearchBioOntologyAssay](docs/typebioontologyassay/README.md#searchbioontologyassay) - Search API for 'Assay' entry type

### [TypeBioOntologyCohort](docs/typebioontologycohort/README.md)

* [SearchBioOntologyCohort](docs/typebioontologycohort/README.md#searchbioontologycohort) - Search API for 'Cohort' entry type

### [TypeBioOntologyPerson](docs/typebioontologyperson/README.md)

* [SearchBioOntologyPerson](docs/typebioontologyperson/README.md#searchbioontologyperson) - Search API for 'Person' entry type

### [TypeBioOntologySample](docs/typebioontologysample/README.md)

* [SearchBioOntologySample](docs/typebioontologysample/README.md#searchbioontologysample) - Search API for 'Sample' entry type

### [TypeBioOntologySeries](docs/typebioontologyseries/README.md)

* [SearchBioOntologySeries](docs/typebioontologyseries/README.md#searchbioontologyseries) - Search API for 'Series' entry type

### [TypeBioOntologyStudy](docs/typebioontologystudy/README.md)

* [SearchBioOntologyStudy](docs/typebioontologystudy/README.md#searchbioontologystudy) - Search API for 'Study' entry type

### [TypeBioSam](docs/typebiosam/README.md)

* [SearchBioSam](docs/typebiosam/README.md#searchbiosam) - Search API for 'SAM Data' entry type

### [TypeBioSfPdb](docs/typebiosfpdb/README.md)

* [SearchBioSfPdb](docs/typebiosfpdb/README.md#searchbiosfpdb) - Search API for 'PDB Protein File' entry type

### [TypeBioSra](docs/typebiosra/README.md)

* [SearchBioSra](docs/typebiosra/README.md#searchbiosra) - Search API for 'Sequence Read Archive' entry type

### [TypeBioStockholm](docs/typebiostockholm/README.md)

* [SearchBioStockholm](docs/typebiostockholm/README.md#searchbiostockholm) - Search API for 'Stockholm File' entry type

### [TypeBioTaxonomy](docs/typebiotaxonomy/README.md)

* [SearchBioTaxonomy](docs/typebiotaxonomy/README.md#searchbiotaxonomy) - Search API for 'Taxonomic Entry' entry type

### [TypeBlogentry](docs/typeblogentry/README.md)

* [SearchBlogentry](docs/typeblogentry/README.md#searchblogentry) - Search API for 'Weblog Entry' entry type

### [TypeBolderRentalHousing](docs/typebolderrentalhousing/README.md)

* [SearchBolderRentalHousing](docs/typebolderrentalhousing/README.md#searchbolderrentalhousing) - Search API for 'Boulder Rental Housing' entry type

### [TypeBookmarks](docs/typebookmarks/README.md)

* [SearchBookmarks](docs/typebookmarks/README.md#searchbookmarks) - Search API for 'Bookmarks' entry type

### [TypeBostonCrime](docs/typebostoncrime/README.md)

* [SearchBostonCrime](docs/typebostoncrime/README.md#searchbostoncrime) - Search API for 'Boston Crime' entry type

### [TypeBoulder2017ElectionContributions](docs/typeboulder2017electioncontributions/README.md)

* [SearchBoulder2017ElectionContributions](docs/typeboulder2017electioncontributions/README.md#searchboulder2017electioncontributions) - Search API for 'Boulder 2017 Election Contributions' entry type

### [TypeBoulderCampaignContributions](docs/typebouldercampaigncontributions/README.md)

* [SearchBoulderCampaignContributions](docs/typebouldercampaigncontributions/README.md#searchbouldercampaigncontributions) - Search API for 'Boulder Campaign Contributions' entry type

### [TypeBoulderConsultingServices](docs/typeboulderconsultingservices/README.md)

* [SearchBoulderConsultingServices](docs/typeboulderconsultingservices/README.md#searchboulderconsultingservices) - Search API for 'Boulder Consulting Services Database' entry type

### [TypeBoulderCountyVoterDetails](docs/typebouldercountyvoterdetails/README.md)

* [SearchBoulderCountyVoterDetails](docs/typebouldercountyvoterdetails/README.md#searchbouldercountyvoterdetails) - Search API for 'Boulder County Voter Details' entry type

### [TypeBoulderCrimes](docs/typebouldercrimes/README.md)

* [SearchBoulderCrimes](docs/typebouldercrimes/README.md#searchbouldercrimes) - Search API for 'Boulder Crime Reports' entry type

### [TypeBoulderEmails](docs/typeboulderemails/README.md)

* [SearchBoulderEmails](docs/typeboulderemails/README.md#searchboulderemails) - Search API for 'Boulder Council Emails' entry type

### [TypeBoulderEmployeeSalaries](docs/typeboulderemployeesalaries/README.md)

* [SearchBoulderEmployeeSalaries](docs/typeboulderemployeesalaries/README.md#searchboulderemployeesalaries) - Search API for 'Boulder Employee Salaries' entry type

### [TypeCalendar](docs/typecalendar/README.md)

* [SearchCalendar](docs/typecalendar/README.md#searchcalendar) - Search API for 'Calendar' entry type

### [TypeCampaignDonors](docs/typecampaigndonors/README.md)

* [SearchCampaignDonors](docs/typecampaigndonors/README.md#searchcampaigndonors) - Search API for 'Campaign Donors' entry type

### [TypeCampaignExpenditures](docs/typecampaignexpenditures/README.md)

* [SearchCampaignExpenditures](docs/typecampaignexpenditures/README.md#searchcampaignexpenditures) - Search API for 'Campaign Expenditures' entry type

### [TypeCataloglink](docs/typecataloglink/README.md)

* [SearchCataloglink](docs/typecataloglink/README.md#searchcataloglink) - Search API for 'Catalog Link' entry type

### [TypeCdmGrid](docs/typecdmgrid/README.md)

* [SearchCdmGrid](docs/typecdmgrid/README.md#searchcdmgrid) - Search API for 'Gridded Data File' entry type

### [TypeChatroom](docs/typechatroom/README.md)

* [SearchChatroom](docs/typechatroom/README.md#searchchatroom) - Search API for 'Chat Room' entry type

### [TypeColoradoWaterRights](docs/typecoloradowaterrights/README.md)

* [SearchColoradoWaterRights](docs/typecoloradowaterrights/README.md#searchcoloradowaterrights) - Search API for 'Colorado Water Rights' entry type

### [TypeCommitteeDonations](docs/typecommitteedonations/README.md)

* [SearchCommitteeDonations](docs/typecommitteedonations/README.md#searchcommitteedonations) - Search API for 'Committee Donations' entry type

### [TypeCommunityDatahub](docs/typecommunitydatahub/README.md)

* [SearchCommunityDatahub](docs/typecommunitydatahub/README.md#searchcommunitydatahub) - Search API for 'Data Hub' entry type

### [TypeCommunityResource](docs/typecommunityresource/README.md)

* [SearchCommunityResource](docs/typecommunityresource/README.md#searchcommunityresource) - Search API for 'Facility' entry type

### [TypeConstructionPermits](docs/typeconstructionpermits/README.md)

* [SearchConstructionPermits](docs/typeconstructionpermits/README.md#searchconstructionpermits) - Search API for 'Construction Permits' entry type

### [TypeContact](docs/typecontact/README.md)

* [SearchContact](docs/typecontact/README.md#searchcontact) - Search API for 'Contact List' entry type

### [TypeDbCoIndicators](docs/typedbcoindicators/README.md)

* [SearchDbCoIndicators](docs/typedbcoindicators/README.md#searchdbcoindicators) - Search API for 'Colorado Health Indicators' entry type

### [TypeEarthSatelliteLandsat](docs/typeearthsatellitelandsat/README.md)

* [SearchEarthSatelliteLandsat](docs/typeearthsatellitelandsat/README.md#searchearthsatellitelandsat) - Search API for 'Landsat Satellite Data' entry type

### [TypeFaq](docs/typefaq/README.md)

* [SearchFaq](docs/typefaq/README.md#searchfaq) - Search API for 'FAQ' entry type

### [TypeFecPacs](docs/typefecpacs/README.md)

* [SearchFecPacs](docs/typefecpacs/README.md#searchfecpacs) - Search API for 'FEC PACs' entry type

### [TypeFeccandidates](docs/typefeccandidates/README.md)

* [SearchFeccandidates](docs/typefeccandidates/README.md#searchfeccandidates) - Search API for 'Candidates' entry type

### [TypeFeed](docs/typefeed/README.md)

* [SearchFeed](docs/typefeed/README.md#searchfeed) - Search API for 'RSS/ATOM Feed' entry type

### [TypeFile](docs/typefile/README.md)

* [SearchFile](docs/typefile/README.md#searchfile) - Search API for 'File' entry type

### [TypeFitsData](docs/typefitsdata/README.md)

* [SearchFitsData](docs/typefitsdata/README.md#searchfitsdata) - Search API for 'FITS Data File' entry type

### [TypeFtp](docs/typeftp/README.md)

* [SearchFtp](docs/typeftp/README.md#searchftp) - Search API for 'Remote FTP File View' entry type

### [TypeGadgetsCountdown](docs/typegadgetscountdown/README.md)

* [SearchGadgetsCountdown](docs/typegadgetscountdown/README.md#searchgadgetscountdown) - Search API for 'Countdown' entry type

### [TypeGadgetsStock](docs/typegadgetsstock/README.md)

* [SearchGadgetsStock](docs/typegadgetsstock/README.md#searchgadgetsstock) - Search API for 'Stock Ticker' entry type

### [TypeGadgetsWeather](docs/typegadgetsweather/README.md)

* [SearchGadgetsWeather](docs/typegadgetsweather/README.md#searchgadgetsweather) - Search API for 'Weather' entry type

### [TypeGazeteerCensusTracts](docs/typegazeteercensustracts/README.md)

* [SearchGazeteerCensusTracts](docs/typegazeteercensustracts/README.md#searchgazeteercensustracts) - Search API for 'Census Tracts' entry type

### [TypeGazeteerCounties](docs/typegazeteercounties/README.md)

* [SearchGazeteerCounties](docs/typegazeteercounties/README.md#searchgazeteercounties) - Search API for 'Census Gazeteer Counties' entry type

### [TypeGeoGe](docs/typegeoge/README.md)

* [SearchGeoGeojson](docs/typegeoge/README.md#searchgeogeojson) - Search API for 'GeoJson File' entry type

### [TypeGeoGeotiff](docs/typegeogeotiff/README.md)

* [SearchGeoGeotiff](docs/typegeogeotiff/README.md#searchgeogeotiff) - Search API for 'GeoTIFF' entry type

### [TypeGeoGpx](docs/typegeogpx/README.md)

* [SearchGeoGpx](docs/typegeogpx/README.md#searchgeogpx) - Search API for 'GPX GPS File' entry type

### [TypeGeoHdf5](docs/typegeohdf5/README.md)

* [SearchGeoHdf5](docs/typegeohdf5/README.md#searchgeohdf5) - Search API for 'HDF5 File' entry type

### [TypeGeoKml](docs/typegeokml/README.md)

* [SearchGeoKml](docs/typegeokml/README.md#searchgeokml) - Search API for 'KML/KMZ File' entry type

### [TypeGeoShapefile](docs/typegeoshapefile/README.md)

* [SearchGeoShapefile](docs/typegeoshapefile/README.md#searchgeoshapefile) - Search API for 'Shapefile' entry type

### [TypeGeoShapefileFips](docs/typegeoshapefilefips/README.md)

* [SearchGeoShapefileFips](docs/typegeoshapefilefips/README.md#searchgeoshapefilefips) - Search API for 'Shapefile with FIPS Code' entry type

### [TypeGlossary](docs/typeglossary/README.md)

* [SearchGlossary](docs/typeglossary/README.md#searchglossary) - Search API for 'Glossary' entry type

### [TypeGridaggregation](docs/typegridaggregation/README.md)

* [SearchGridaggregation](docs/typegridaggregation/README.md#searchgridaggregation) - Search API for 'Grid Aggregation' entry type

### [TypeGroup](docs/typegroup/README.md)

* [SearchGroup](docs/typegroup/README.md#searchgroup) - Search API for 'Folder' entry type

### [TypeHipchatGroup](docs/typehipchatgroup/README.md)

* [SearchHipchatGroup](docs/typehipchatgroup/README.md#searchhipchatgroup) - Search API for 'HipChat Group' entry type

### [TypeHomepage](docs/typehomepage/README.md)

* [SearchHomepage](docs/typehomepage/README.md#searchhomepage) - Search API for 'Home Page' entry type

### [TypeIncident](docs/typeincident/README.md)

* [SearchIncident](docs/typeincident/README.md#searchincident) - Search API for 'Incident' entry type

### [TypeJeopardy](docs/typejeopardy/README.md)

* [SearchJeopardy](docs/typejeopardy/README.md#searchjeopardy) - Search API for 'Jeopardy' entry type

### [TypeLatlonimage](docs/typelatlonimage/README.md)

* [SearchLatlonimage](docs/typelatlonimage/README.md#searchlatlonimage) - Search API for 'Lat-Lon Image' entry type

### [TypeLidarCollection](docs/typelidarcollection/README.md)

* [SearchLidarCollection](docs/typelidarcollection/README.md#searchlidarcollection) - Search API for 'LiDAR Collection' entry type

### [TypeLidarLas](docs/typelidarlas/README.md)

* [SearchLidarLas](docs/typelidarlas/README.md#searchlidarlas) - Search API for 'LAS Lidar Data' entry type

### [TypeLidarLvis](docs/typelidarlvis/README.md)

* [SearchLidarLvis](docs/typelidarlvis/README.md#searchlidarlvis) - Search API for 'LVIS Lidar Data' entry type

### [TypeLink](docs/typelink/README.md)

* [SearchLink](docs/typelink/README.md#searchlink) - Search API for 'Link' entry type

### [TypeLocalfiles](docs/typelocalfiles/README.md)

* [SearchLocalfiles](docs/typelocalfiles/README.md#searchlocalfiles) - Search API for 'Server Side Files' entry type

### [TypeLocations](docs/typelocations/README.md)

* [SearchLocations](docs/typelocations/README.md#searchlocations) - Search API for 'Locations' entry type

### [TypeMapGooglemap](docs/typemapgooglemap/README.md)

* [SearchMapGooglemap](docs/typemapgooglemap/README.md#searchmapgooglemap) - Search API for 'Google Map URL' entry type

### [TypeMediaAudiofile](docs/typemediaaudiofile/README.md)

* [SearchMediaAudiofile](docs/typemediaaudiofile/README.md#searchmediaaudiofile) - Search API for 'Audio File' entry type

### [TypeMediaImageloop](docs/typemediaimageloop/README.md)

* [SearchMediaImageloop](docs/typemediaimageloop/README.md#searchmediaimageloop) - Search API for 'Image Loop' entry type

### [TypeMediaPhotoalbum](docs/typemediaphotoalbum/README.md)

* [SearchMediaPhotoalbum](docs/typemediaphotoalbum/README.md#searchmediaphotoalbum) - Search API for 'Photo Album' entry type

### [TypeMediaVideoChannel](docs/typemediavideochannel/README.md)

* [SearchMediaVideoChannel](docs/typemediavideochannel/README.md#searchmediavideochannel) - Search API for 'Video Channel' entry type

### [TypeMediaVideoQuicktime](docs/typemediavideoquicktime/README.md)

* [SearchMediaVideoQuicktime](docs/typemediavideoquicktime/README.md#searchmediavideoquicktime) - Search API for 'Quicktime Video' entry type

### [TypeMediaYoutubevideo](docs/typemediayoutubevideo/README.md)

* [SearchMediaYoutubevideo](docs/typemediayoutubevideo/README.md#searchmediayoutubevideo) - Search API for 'YouTube Video' entry type

### [TypeNotes](docs/typenotes/README.md)

* [SearchNotes](docs/typenotes/README.md#searchnotes) - Search API for 'Notes' entry type

### [TypeNotesJsonfile](docs/typenotesjsonfile/README.md)

* [SearchNotesJsonfile](docs/typenotesjsonfile/README.md#searchnotesjsonfile) - Search API for 'Json File' entry type

### [TypeNotesNote](docs/typenotesnote/README.md)

* [SearchNotesNote](docs/typenotesnote/README.md#searchnotesnote) - Search API for 'Note' entry type

### [TypeNotesNotebook](docs/typenotesnotebook/README.md)

* [SearchNotesNotebook](docs/typenotesnotebook/README.md#searchnotesnotebook) - Search API for 'Notebook' entry type

### [TypeNwsfeed](docs/typenwsfeed/README.md)

* [SearchNwsfeed](docs/typenwsfeed/README.md#searchnwsfeed) - Search API for 'NWS Forecast Feed' entry type

### [TypeOpendaplink](docs/typeopendaplink/README.md)

* [SearchOpendaplink](docs/typeopendaplink/README.md#searchopendaplink) - Search API for 'OPeNDAP Link' entry type

### [TypeOwlClass](docs/typeowlclass/README.md)

* [SearchOwlClass](docs/typeowlclass/README.md#searchowlclass) - Search API for 'OWL Class' entry type

### [TypeOwlOntology](docs/typeowlontology/README.md)

* [SearchOwlOntology](docs/typeowlontology/README.md#searchowlontology) - Search API for 'OWL Ontology' entry type

### [TypePasteitentry](docs/typepasteitentry/README.md)

* [SearchPasteitentry](docs/typepasteitentry/README.md#searchpasteitentry) - Search API for 'Paste Text Entry' entry type

### [TypePointText](docs/typepointtext/README.md)

* [SearchPointText](docs/typepointtext/README.md#searchpointtext) - Search API for 'Text Point Data' entry type

### [TypePoliceStopData](docs/typepolicestopdata/README.md)

* [SearchPoliceStopData](docs/typepolicestopdata/README.md#searchpolicestopdata) - Search API for 'Police Stop Data' entry type

### [TypePoll](docs/typepoll/README.md)

* [SearchPoll](docs/typepoll/README.md#searchpoll) - Search API for 'Poll' entry type

### [TypeProjectCampaign](docs/typeprojectcampaign/README.md)

* [SearchProjectCampaign](docs/typeprojectcampaign/README.md#searchprojectcampaign) - Search API for 'Campaign' entry type

### [TypeProjectCasestudy](docs/typeprojectcasestudy/README.md)

* [SearchProjectCasestudy](docs/typeprojectcasestudy/README.md#searchprojectcasestudy) - Search API for 'Case Study' entry type

### [TypeProjectContribution](docs/typeprojectcontribution/README.md)

* [SearchProjectContribution](docs/typeprojectcontribution/README.md#searchprojectcontribution) - Search API for 'Research Contribution' entry type

### [TypeProjectDataformat](docs/typeprojectdataformat/README.md)

* [SearchProjectDataformat](docs/typeprojectdataformat/README.md#searchprojectdataformat) - Search API for 'Data Format' entry type

### [TypeProjectDataset](docs/typeprojectdataset/README.md)

* [SearchProjectDataset](docs/typeprojectdataset/README.md#searchprojectdataset) - Search API for 'Dataset' entry type

### [TypeProjectDeployment](docs/typeprojectdeployment/README.md)

* [SearchProjectDeployment](docs/typeprojectdeployment/README.md#searchprojectdeployment) - Search API for 'Deployment' entry type

### [TypeProjectExperiment](docs/typeprojectexperiment/README.md)

* [SearchProjectExperiment](docs/typeprojectexperiment/README.md#searchprojectexperiment) - Search API for 'Experiment' entry type

### [TypeProjectFieldnote](docs/typeprojectfieldnote/README.md)

* [SearchProjectFieldnote](docs/typeprojectfieldnote/README.md#searchprojectfieldnote) - Search API for 'Field Note' entry type

### [TypeProjectGpsControlpoints](docs/typeprojectgpscontrolpoints/README.md)

* [SearchProjectGpsControlpoints](docs/typeprojectgpscontrolpoints/README.md#searchprojectgpscontrolpoints) - Search API for 'Control Points File' entry type

### [TypeProjectGpsRaw](docs/typeprojectgpsraw/README.md)

* [SearchProjectGpsRaw](docs/typeprojectgpsraw/README.md#searchprojectgpsraw) - Search API for 'Raw GPS File' entry type

### [TypeProjectGpsRinex](docs/typeprojectgpsrinex/README.md)

* [SearchProjectGpsRinex](docs/typeprojectgpsrinex/README.md#searchprojectgpsrinex) - Search API for 'RINEX File' entry type

### [TypeProjectInstrument](docs/typeprojectinstrument/README.md)

* [SearchProjectInstrument](docs/typeprojectinstrument/README.md#searchprojectinstrument) - Search API for 'Instrument Data Collection' entry type

### [TypeProjectLearningResource](docs/typeprojectlearningresource/README.md)

* [SearchProjectLearningResource](docs/typeprojectlearningresource/README.md#searchprojectlearningresource) - Search API for 'Teaching Resource' entry type

### [TypeProjectMeeting](docs/typeprojectmeeting/README.md)

* [SearchProjectMeeting](docs/typeprojectmeeting/README.md#searchprojectmeeting) - Search API for 'Meeting' entry type

### [TypeProjectOrganization](docs/typeprojectorganization/README.md)

* [SearchProjectOrganization](docs/typeprojectorganization/README.md#searchprojectorganization) - Search API for 'Organization' entry type

### [TypeProjectProgram](docs/typeprojectprogram/README.md)

* [SearchProjectProgram](docs/typeprojectprogram/README.md#searchprojectprogram) - Search API for 'Program' entry type

### [TypeProjectProject](docs/typeprojectproject/README.md)

* [SearchProjectProject](docs/typeprojectproject/README.md#searchprojectproject) - Search API for 'Project' entry type

### [TypeProjectService](docs/typeprojectservice/README.md)

* [SearchProjectService](docs/typeprojectservice/README.md#searchprojectservice) - Search API for 'Data Access Service' entry type

### [TypeProjectSite](docs/typeprojectsite/README.md)

* [SearchProjectSite](docs/typeprojectsite/README.md#searchprojectsite) - Search API for 'Site' entry type

### [TypeProjectSoftwarepackage](docs/typeprojectsoftwarepackage/README.md)

* [SearchProjectSoftwarepackage](docs/typeprojectsoftwarepackage/README.md#searchprojectsoftwarepackage) - Search API for 'Software Tool' entry type

### [TypeProjectStandardName](docs/typeprojectstandardname/README.md)

* [SearchProjectStandardName](docs/typeprojectstandardname/README.md#searchprojectstandardname) - Search API for 'Standard Parameter Name' entry type

### [TypeProjectSurveylocation](docs/typeprojectsurveylocation/README.md)

* [SearchProjectSurveylocation](docs/typeprojectsurveylocation/README.md#searchprojectsurveylocation) - Search API for 'Survey Location' entry type

### [TypeProjectTerm](docs/typeprojectterm/README.md)

* [SearchProjectTerm](docs/typeprojectterm/README.md#searchprojectterm) - Search API for 'Vocabulary Term' entry type

### [TypeProjectVisit](docs/typeprojectvisit/README.md)

* [SearchProjectVisit](docs/typeprojectvisit/README.md#searchprojectvisit) - Search API for 'Site Visit' entry type

### [TypeProjectVocabulary](docs/typeprojectvocabulary/README.md)

* [SearchProjectVocabulary](docs/typeprojectvocabulary/README.md#searchprojectvocabulary) - Search API for 'Vocabulary' entry type

### [TypePropertySales](docs/typepropertysales/README.md)

* [SearchPropertySales](docs/typepropertysales/README.md#searchpropertysales) - Search API for 'Property Sales' entry type

### [TypePropertydb](docs/typepropertydb/README.md)

* [SearchPropertydb](docs/typepropertydb/README.md#searchpropertydb) - Search API for 'Property Database' entry type

### [TypePythonNotebook](docs/typepythonnotebook/README.md)

* [SearchPythonNotebook](docs/typepythonnotebook/README.md#searchpythonnotebook) - Search API for 'IPython Notebook file' entry type

### [TypeSlackTeam](docs/typeslackteam/README.md)

* [SearchSlackTeam](docs/typeslackteam/README.md#searchslackteam) - Search API for 'Slack Team' entry type

### [TypeStatusboard](docs/typestatusboard/README.md)

* [SearchStatusboard](docs/typestatusboard/README.md#searchstatusboard) - Search API for 'Status Board' entry type

### [TypeSunrisesunset](docs/typesunrisesunset/README.md)

* [SearchSunrisesunset](docs/typesunrisesunset/README.md#searchsunrisesunset) - Search API for 'Sunrise/Sunset Display' entry type

### [TypeTasks](docs/typetasks/README.md)

* [SearchTasks](docs/typetasks/README.md#searchtasks) - Search API for 'Tasks' entry type

### [TypeTmdbmovies](docs/typetmdbmovies/README.md)

* [SearchTmdbmovies](docs/typetmdbmovies/README.md#searchtmdbmovies) - Search API for 'Tmdb Movies' entry type

### [TypeTodo](docs/typetodo/README.md)

* [SearchTodo](docs/typetodo/README.md#searchtodo) - Search API for 'Todo' entry type

### [TypeTripEvent](docs/typetripevent/README.md)

* [SearchTripEvent](docs/typetripevent/README.md#searchtripevent) - Search API for 'Event' entry type

### [TypeTripFlight](docs/typetripflight/README.md)

* [SearchTripFlight](docs/typetripflight/README.md#searchtripflight) - Search API for 'Flight Leg' entry type

### [TypeTripHotel](docs/typetriphotel/README.md)

* [SearchTripHotel](docs/typetriphotel/README.md#searchtriphotel) - Search API for 'Lodging' entry type

### [TypeTripReport](docs/typetripreport/README.md)

* [SearchTripReport](docs/typetripreport/README.md#searchtripreport) - Search API for 'Trip Report' entry type

### [TypeTripTrip](docs/typetriptrip/README.md)

* [SearchTripTrip](docs/typetriptrip/README.md#searchtriptrip) - Search API for 'Trip' entry type

### [TypeTypeAwcMetar](docs/typetypeawcmetar/README.md)

* [SearchTypeAwcMetar](docs/typetypeawcmetar/README.md#searchtypeawcmetar) - Search API for 'AWC Weather Observations' entry type

### [TypeTypeBizStockseries](docs/typetypebizstockseries/README.md)

* [SearchTypeBizStockseries](docs/typetypebizstockseries/README.md#searchtypebizstockseries) - Search API for 'Stock Ticker Data' entry type

### [TypeTypeBlsSeries](docs/typetypeblsseries/README.md)

* [SearchTypeBlsSeries](docs/typetypeblsseries/README.md#searchtypeblsseries) - Search API for 'BLS Series' entry type

### [TypeTypeBlsSurvey](docs/typetypeblssurvey/README.md)

* [SearchTypeBlsSurvey](docs/typetypeblssurvey/README.md#searchtypeblssurvey) - Search API for 'BLS Survey' entry type

### [TypeTypeCensusAcs](docs/typetypecensusacs/README.md)

* [SearchTypeCensusAcs](docs/typetypecensusacs/README.md#searchtypecensusacs) - Search API for 'US Census ACS Data' entry type

### [TypeTypeDaymet](docs/typetypedaymet/README.md)

* [SearchTypeDaymet](docs/typetypedaymet/README.md#searchtypedaymet) - Search API for 'Daymet Daily Weather' entry type

### [TypeTypeDbTable](docs/typetypedbtable/README.md)

* [SearchTypeDbTable](docs/typetypedbtable/README.md#searchtypedbtable) - Search API for 'Database Table' entry type

### [TypeTypeDocumentCsv](docs/typetypedocumentcsv/README.md)

* [SearchTypeDocumentCsv](docs/typetypedocumentcsv/README.md#searchtypedocumentcsv) - Search API for 'CSV File' entry type

### [TypeTypeDocumentDoc](docs/typetypedocumentdoc/README.md)

* [SearchTypeDocumentDoc](docs/typetypedocumentdoc/README.md#searchtypedocumentdoc) - Search API for 'Word File' entry type

### [TypeTypeDocumentHTML](docs/typetypedocumenthtml/README.md)

* [SearchTypeDocumentHTML](docs/typetypedocumenthtml/README.md#searchtypedocumenthtml) - Search API for 'HTML File' entry type

### [TypeTypeDocumentPdf](docs/typetypedocumentpdf/README.md)

* [SearchTypeDocumentPdf](docs/typetypedocumentpdf/README.md#searchtypedocumentpdf) - Search API for 'PDF File' entry type

### [TypeTypeDocumentPpt](docs/typetypedocumentppt/README.md)

* [SearchTypeDocumentPpt](docs/typetypedocumentppt/README.md#searchtypedocumentppt) - Search API for 'Powerpoint File' entry type

### [TypeTypeDocumentXls](docs/typetypedocumentxls/README.md)

* [SearchTypeDocumentXls](docs/typetypedocumentxls/README.md#searchtypedocumentxls) - Search API for 'Excel File' entry type

### [TypeTypeDrilsdownCasestudy](docs/typetypedrilsdowncasestudy/README.md)

* [SearchTypeDrilsdownCasestudy](docs/typetypedrilsdowncasestudy/README.md#searchtypedrilsdowncasestudy) - Search API for 'Drilsdown Case Study' entry type

### [TypeTypeEdgarFiling](docs/typetypeedgarfiling/README.md)

* [SearchTypeEdgarFiling](docs/typetypeedgarfiling/README.md#searchtypeedgarfiling) - Search API for 'SEC EDGAR Filing' entry type

### [TypeTypeEiaCategory](docs/typetypeeiacategory/README.md)

* [SearchTypeEiaCategory](docs/typetypeeiacategory/README.md#searchtypeeiacategory) - Search API for 'EIA Category' entry type

### [TypeTypeEiaSeries](docs/typetypeeiaseries/README.md)

* [SearchTypeEiaSeries](docs/typetypeeiaseries/README.md#searchtypeeiaseries) - Search API for 'EIA Series' entry type

### [TypeTypeEsriFeatureserver](docs/typetypeesrifeatureserver/README.md)

* [SearchTypeEsriFeatureserver](docs/typetypeesrifeatureserver/README.md#searchtypeesrifeatureserver) - Search API for 'ESRI Feature Server' entry type

### [TypeTypeEsriGeometryserver](docs/typetypeesrigeometryserver/README.md)

* [SearchTypeEsriGeometryserver](docs/typetypeesrigeometryserver/README.md#searchtypeesrigeometryserver) - Search API for 'ESRI Geometry Server' entry type

### [TypeTypeEsriGpserver](docs/typetypeesrigpserver/README.md)

* [SearchTypeEsriGpserver](docs/typetypeesrigpserver/README.md#searchtypeesrigpserver) - Search API for 'ESRI GP Server' entry type

### [TypeTypeEsriImageserver](docs/typetypeesriimageserver/README.md)

* [SearchTypeEsriImageserver](docs/typetypeesriimageserver/README.md#searchtypeesriimageserver) - Search API for 'ESRI Image Server' entry type

### [TypeTypeEsriLayer](docs/typetypeesrilayer/README.md)

* [SearchTypeEsriLayer](docs/typetypeesrilayer/README.md#searchtypeesrilayer) - Search API for 'ESRI Layer' entry type

### [TypeTypeEsriMapserver](docs/typetypeesrimapserver/README.md)

* [SearchTypeEsriMapserver](docs/typetypeesrimapserver/README.md#searchtypeesrimapserver) - Search API for 'ESRI Map Server' entry type

### [TypeTypeEsriRestfolder](docs/typetypeesrirestfolder/README.md)

* [SearchTypeEsriRestfolder](docs/typetypeesrirestfolder/README.md#searchtypeesrirestfolder) - Search API for 'ESRI Services Folder' entry type

### [TypeTypeEsriRestserver](docs/typetypeesrirestserver/README.md)

* [SearchTypeEsriRestserver](docs/typetypeesrirestserver/README.md#searchtypeesrirestserver) - Search API for 'ESRI Web Server' entry type

### [TypeTypeEsriRestservice](docs/typetypeesrirestservice/README.md)

* [SearchTypeEsriRestservice](docs/typetypeesrirestservice/README.md#searchtypeesrirestservice) - Search API for 'ESRI Rest Service' entry type

### [TypeTypeExtremes](docs/typetypeextremes/README.md)

* [SearchTypeExtremes](docs/typetypeextremes/README.md#searchtypeextremes) - Search API for 'NOAA Extremes Data' entry type

### [TypeTypeFredCategory](docs/typetypefredcategory/README.md)

* [SearchTypeFredCategory](docs/typetypefredcategory/README.md#searchtypefredcategory) - Search API for 'FRED Category' entry type

### [TypeTypeFredSeries](docs/typetypefredseries/README.md)

* [SearchTypeFredSeries](docs/typetypefredseries/README.md#searchtypefredseries) - Search API for 'FRED Series' entry type

### [TypeTypeGtfsAgency](docs/typetypegtfsagency/README.md)

* [SearchTypeGtfsAgency](docs/typetypegtfsagency/README.md#searchtypegtfsagency) - Search API for 'Transit Agency' entry type

### [TypeTypeGtfsRoute](docs/typetypegtfsroute/README.md)

* [SearchTypeGtfsRoute](docs/typetypegtfsroute/README.md#searchtypegtfsroute) - Search API for 'Transit Route' entry type

### [TypeTypeGtfsRoutes](docs/typetypegtfsroutes/README.md)

* [SearchTypeGtfsRoutes](docs/typetypegtfsroutes/README.md#searchtypegtfsroutes) - Search API for 'Transit Route Collection' entry type

### [TypeTypeGtfsStop](docs/typetypegtfsstop/README.md)

* [SearchTypeGtfsStop](docs/typetypegtfsstop/README.md#searchtypegtfsstop) - Search API for 'Transit Stop' entry type

### [TypeTypeGtfsStops](docs/typetypegtfsstops/README.md)

* [SearchTypeGtfsStops](docs/typetypegtfsstops/README.md#searchtypegtfsstops) - Search API for 'Transit Stop Collection' entry type

### [TypeTypeGtfsTrip](docs/typetypegtfstrip/README.md)

* [SearchTypeGtfsTrip](docs/typetypegtfstrip/README.md#searchtypegtfstrip) - Search API for 'Transit Trip' entry type

### [TypeTypeHazarddata](docs/typetypehazarddata/README.md)

* [SearchTypeHazarddata](docs/typetypehazarddata/README.md#searchtypehazarddata) - Search API for 'Hazard Data' entry type

### [TypeTypeHydroColorado](docs/typetypehydrocolorado/README.md)

* [SearchTypeHydroColorado](docs/typetypehydrocolorado/README.md#searchtypehydrocolorado) - Search API for 'Colorado DNR Stream Gage' entry type

### [TypeTypeIdvBundle](docs/typetypeidvbundle/README.md)

* [SearchTypeIdvBundle](docs/typetypeidvbundle/README.md#searchtypeidvbundle) - Search API for 'IDV Bundle' entry type

### [TypeTypeImage](docs/typetypeimage/README.md)

* [SearchTypeImage](docs/typetypeimage/README.md#searchtypeimage) - Search API for 'Image' entry type

### [TypeTypeImageAirport](docs/typetypeimageairport/README.md)

* [SearchTypeImageAirport](docs/typetypeimageairport/README.md#searchtypeimageairport) - Search API for 'Airport Image' entry type

### [TypeTypeImageWebcam](docs/typetypeimagewebcam/README.md)

* [SearchTypeImageWebcam](docs/typetypeimagewebcam/README.md#searchtypeimagewebcam) - Search API for 'Webcam' entry type

### [TypeTypeMb](docs/typetypemb/README.md)

* [SearchTypeMb](docs/typetypemb/README.md#searchtypemb) - Search API for 'MB Bathymetry' entry type

### [TypeTypeMbCollection](docs/typetypembcollection/README.md)

* [SearchTypeMbCollection](docs/typetypembcollection/README.md#searchtypembcollection) - Search API for 'Bathymetry Collection' entry type

### [TypeTypeMbPointBasic](docs/typetypembpointbasic/README.md)

* [SearchTypeMbPointBasic](docs/typetypembpointbasic/README.md#searchtypembpointbasic) - Search API for 'Basic MB point file' entry type

### [TypeTypeMetametaDictionary](docs/typetypemetametadictionary/README.md)

* [SearchTypeMetametaDictionary](docs/typetypemetametadictionary/README.md#searchtypemetametadictionary) - Search API for 'Metadata Dictionary' entry type

### [TypeTypeMetametaField](docs/typetypemetametafield/README.md)

* [SearchTypeMetametaField](docs/typetypemetametafield/README.md#searchtypemetametafield) - Search API for 'Metadata Field' entry type

### [TypeTypeNasaames](docs/typetypenasaames/README.md)

* [SearchTypeNasaames](docs/typetypenasaames/README.md#searchtypenasaames) - Search API for 'NASA AMES File' entry type

### [TypeTypeNcss](docs/typetypencss/README.md)

* [SearchTypeNcss](docs/typetypencss/README.md#searchtypencss) - Search API for 'NetCDF Point Subset' entry type

### [TypeTypeNitf](docs/typetypenitf/README.md)

* [SearchTypeNitf](docs/typetypenitf/README.md#searchtypenitf) - Search API for 'NITF File' entry type

### [TypeTypePointAmerifluxLevel2](docs/typetypepointamerifluxlevel2/README.md)

* [SearchTypePointAmerifluxLevel2](docs/typetypepointamerifluxlevel2/README.md#searchtypepointamerifluxlevel2) - Search API for 'Ameriflux Level 2 CSV File' entry type

### [TypeTypePointAmrcFinal](docs/typetypepointamrcfinal/README.md)

* [SearchTypePointAmrcFinal](docs/typetypepointamrcfinal/README.md#searchtypepointamrcfinal) - Search API for 'AMRC Final QC Data' entry type

### [TypeTypePointAmrcFreewave](docs/typetypepointamrcfreewave/README.md)

* [SearchTypePointAmrcFreewave](docs/typetypepointamrcfreewave/README.md#searchtypepointamrcfreewave) - Search API for 'AMRC Freewave  Data' entry type

### [TypeTypePointCzo](docs/typetypepointczo/README.md)

* [SearchTypePointCzo](docs/typetypepointczo/README.md#searchtypepointczo) - Search API for 'CZO Display File Format' entry type

### [TypeTypePointGcnet](docs/typetypepointgcnet/README.md)

* [SearchTypePointGcnet](docs/typetypepointgcnet/README.md#searchtypepointgcnet) - Search API for 'GC-Net Point Data' entry type

### [TypeTypePointGeomagIaga2002](docs/typetypepointgeomagiaga2002/README.md)

* [SearchTypePointGeomagIaga2002](docs/typetypepointgeomagiaga2002/README.md#searchtypepointgeomagiaga2002) - Search API for 'IAGA 2002 Geomagnetism Data' entry type

### [TypeTypePointHydroWaterml](docs/typetypepointhydrowaterml/README.md)

* [SearchTypePointHydroWaterml](docs/typetypepointhydrowaterml/README.md#searchtypepointhydrowaterml) - Search API for 'WaterML' entry type

### [TypeTypePointIcebridgeAtmIcessn](docs/typetypepointicebridgeatmicessn/README.md)

* [SearchTypePointIcebridgeAtmIcessn](docs/typetypepointicebridgeatmicessn/README.md#searchtypepointicebridgeatmicessn) - Search API for 'ATM Ice SSN Data' entry type

### [TypeTypePointIcebridgeAtmQfit](docs/typetypepointicebridgeatmqfit/README.md)

* [SearchTypePointIcebridgeAtmQfit](docs/typetypepointicebridgeatmqfit/README.md#searchtypepointicebridgeatmqfit) - Search API for 'ATM QFIT Data' entry type

### [TypeTypePointIcebridgeMccordsIrmcr2](docs/typetypepointicebridgemccordsirmcr2/README.md)

* [SearchTypePointIcebridgeMccordsIrmcr2](docs/typetypepointicebridgemccordsirmcr2/README.md#searchtypepointicebridgemccordsirmcr2) - Search API for 'McCords Irmcr2 Data' entry type

### [TypeTypePointIcebridgeMccordsIrmcr3](docs/typetypepointicebridgemccordsirmcr3/README.md)

* [SearchTypePointIcebridgeMccordsIrmcr3](docs/typetypepointicebridgemccordsirmcr3/README.md#searchtypepointicebridgemccordsirmcr3) - Search API for 'McCords Irmcr3 Data' entry type

### [TypeTypePointIcebridgeParis](docs/typetypepointicebridgeparis/README.md)

* [SearchTypePointIcebridgeParis](docs/typetypepointicebridgeparis/README.md#searchtypepointicebridgeparis) - Search API for 'Paris Data' entry type

### [TypeTypePointIdv](docs/typetypepointidv/README.md)

* [SearchTypePointIdv](docs/typetypepointidv/README.md#searchtypepointidv) - Search API for 'IDV Point File' entry type

### [TypeTypePointInline](docs/typetypepointinline/README.md)

* [SearchTypePointInline](docs/typetypepointinline/README.md#searchtypepointinline) - Search API for 'Inline Point File' entry type

### [TypeTypePointNcdcClimate](docs/typetypepointncdcclimate/README.md)

* [SearchTypePointNcdcClimate](docs/typetypepointncdcclimate/README.md#searchtypepointncdcclimate) - Search API for 'NC  DC Climate Data' entry type

### [TypeTypePointNetcdf](docs/typetypepointnetcdf/README.md)

* [SearchTypePointNetcdf](docs/typetypepointnetcdf/README.md#searchtypepointnetcdf) - Search API for 'NetCDF Point File' entry type

### [TypeTypePointNoaaCarbon](docs/typetypepointnoaacarbon/README.md)

* [SearchTypePointNoaaCarbon](docs/typetypepointnoaacarbon/README.md#searchtypepointnoaacarbon) - Search API for 'NOAA Carbon Measurements' entry type

### [TypeTypePointNoaaFlaskEvent](docs/typetypepointnoaaflaskevent/README.md)

* [SearchTypePointNoaaFlaskEvent](docs/typetypepointnoaaflaskevent/README.md#searchtypepointnoaaflaskevent) - Search API for 'NOAA Flask Event Measurements' entry type

### [TypeTypePointNoaaFlaskMonth](docs/typetypepointnoaaflaskmonth/README.md)

* [SearchTypePointNoaaFlaskMonth](docs/typetypepointnoaaflaskmonth/README.md#searchtypepointnoaaflaskmonth) - Search API for 'NOAA Flask Month Measurements' entry type

### [TypeTypePointNoaaMadis](docs/typetypepointnoaamadis/README.md)

* [SearchTypePointNoaaMadis](docs/typetypepointnoaamadis/README.md#searchtypepointnoaamadis) - Search API for 'NOAA MADIS Point Data' entry type

### [TypeTypePointNoaaTower](docs/typetypepointnoaatower/README.md)

* [SearchTypePointNoaaTower](docs/typetypepointnoaatower/README.md#searchtypepointnoaatower) - Search API for 'NOAA Tower Network' entry type

### [TypeTypePointOceanCnv](docs/typetypepointoceancnv/README.md)

* [SearchTypePointOceanCnv](docs/typetypepointoceancnv/README.md#searchtypepointoceancnv) - Search API for 'SeaBird CNV Data' entry type

### [TypeTypePointOceanCsvSadoTTS](docs/typetypepointoceancsvsadotts/README.md)

* [SearchTypePointOceanCsvSadoTTS](docs/typetypepointoceancsvsadotts/README.md#searchtypepointoceancsvsadotts) - Search API for 'SADO TTS Data' entry type

### [TypeTypePointOceanCsvSadoMeteo](docs/typetypepointoceancsvsadometeo/README.md)

* [SearchTypePointOceanCsvSadoMeteo](docs/typetypepointoceancsvsadometeo/README.md#searchtypepointoceancsvsadometeo) - Search API for 'SADO Meteo Data' entry type

### [TypeTypePointOceanCsvSadoPosition](docs/typetypepointoceancsvsadoposition/README.md)

* [SearchTypePointOceanCsvSadoPosition](docs/typetypepointoceancsvsadoposition/README.md#searchtypepointoceancsvsadoposition) - Search API for 'SADO Position Data' entry type

### [TypeTypePointOceanNetcdfGlider](docs/typetypepointoceannetcdfglider/README.md)

* [SearchTypePointOceanNetcdfGlider](docs/typetypepointoceannetcdfglider/README.md#searchtypepointoceannetcdfglider) - Search API for 'NetCDF Glider Data' entry type

### [TypeTypePointOceanNetcdfTrack](docs/typetypepointoceannetcdftrack/README.md)

* [SearchTypePointOceanNetcdfTrack](docs/typetypepointoceannetcdftrack/README.md#searchtypepointoceannetcdftrack) - Search API for 'NetCDF Track Data' entry type

### [TypeTypePointOceanOoiDmgx](docs/typetypepointoceanooidmgx/README.md)

* [SearchTypePointOceanOoiDmgx](docs/typetypepointoceanooidmgx/README.md#searchtypepointoceanooidmgx) - Search API for 'OOI Data' entry type

### [TypeTypePointOpenaq](docs/typetypepointopenaq/README.md)

* [SearchTypePointOpenaq](docs/typetypepointopenaq/README.md#searchtypepointopenaq) - Search API for 'Open AQ Air Quality' entry type

### [TypeTypePointPboPositionTimeSeries](docs/typetypepointpbopositiontimeseries/README.md)

* [SearchTypePointPboPositionTimeSeries](docs/typetypepointpbopositiontimeseries/README.md#searchtypepointpbopositiontimeseries) - Search API for 'PBO Position Time Series' entry type

### [TypeTypePointSimpleRecords](docs/typetypepointsimplerecords/README.md)

* [SearchTypePointSimpleRecords](docs/typetypepointsimplerecords/README.md#searchtypepointsimplerecords) - Search API for 'Simple Records' entry type

### [TypeTypePointSnotel](docs/typetypepointsnotel/README.md)

* [SearchTypePointSnotel](docs/typetypepointsnotel/README.md#searchtypepointsnotel) - Search API for 'SNOTEL Snow Data' entry type

### [TypeTypePointText](docs/typetypepointtext/README.md)

* [SearchTypePointText](docs/typetypepointtext/README.md#searchtypepointtext) - Search API for 'Record Text File' entry type

### [TypeTypePointWsbbGgp](docs/typetypepointwsbbggp/README.md)

* [SearchTypePointWsbbGgp](docs/typetypepointwsbbggp/README.md#searchtypepointwsbbggp) - Search API for 'Global Geodynamics GGP Format' entry type

### [TypeTypePsdMonthlyClimateIndex](docs/typetypepsdmonthlyclimateindex/README.md)

* [SearchTypePsdMonthlyClimateIndex](docs/typetypepsdmonthlyclimateindex/README.md#searchtypepsdmonthlyclimateindex) - Search API for 'NOAA-ESRL-PSD Monthly Climate Index' entry type

### [TypeTypeQuandlSeries](docs/typetypequandlseries/README.md)

* [SearchTypeQuandlSeries](docs/typetypequandlseries/README.md#searchtypequandlseries) - Search API for 'QUANDL Series' entry type

### [TypeTypeServiceGroup](docs/typetypeservicegroup/README.md)

* [SearchTypeServiceGroup](docs/typetypeservicegroup/README.md#searchtypeservicegroup) - Search API for 'Service Group' entry type

### [TypeTypeServiceLink](docs/typetypeservicelink/README.md)

* [SearchTypeServiceLink](docs/typetypeservicelink/README.md#searchtypeservicelink) - Search API for 'Service Link' entry type

### [TypeTypeSocrataSeries](docs/typetypesocrataseries/README.md)

* [SearchTypeSocrataSeries](docs/typetypesocrataseries/README.md#searchtypesocrataseries) - Search API for 'SOCRATA Series' entry type

### [TypeTypeSoundingCod](docs/typetypesoundingcod/README.md)

* [SearchTypeSoundingCod](docs/typetypesoundingcod/README.md#searchtypesoundingcod) - Search API for 'COD Sounding' entry type

### [TypeTypeSoundingFrd](docs/typetypesoundingfrd/README.md)

* [SearchTypeSoundingFrd](docs/typetypesoundingfrd/README.md#searchtypesoundingfrd) - Search API for 'FRD Sounding' entry type

### [TypeTypeSoundingGsd](docs/typetypesoundinggsd/README.md)

* [SearchTypeSoundingGsd](docs/typetypesoundinggsd/README.md#searchtypesoundinggsd) - Search API for 'GSD Sounding' entry type

### [TypeTypeSoundingWyoming](docs/typetypesoundingwyoming/README.md)

* [SearchTypeSoundingWyoming](docs/typetypesoundingwyoming/README.md#searchtypesoundingwyoming) - Search API for 'UW Sounding' entry type

### [TypeTypeTmy](docs/typetypetmy/README.md)

* [SearchTypeTmy](docs/typetypetmy/README.md#searchtypetmy) - Search API for 'NREL TMY Data' entry type

### [TypeTypeTweet](docs/typetypetweet/README.md)

* [SearchTypeTweet](docs/typetypetweet/README.md#searchtypetweet) - Search API for 'Tweet' entry type

### [TypeTypeUsgsGauge](docs/typetypeusgsgauge/README.md)

* [SearchTypeUsgsGauge](docs/typetypeusgsgauge/README.md#searchtypeusgsgauge) - Search API for 'USGS Stream Gauge' entry type

### [TypeTypeVirtual](docs/typetypevirtual/README.md)

* [SearchTypeVirtual](docs/typetypevirtual/README.md#searchtypevirtual) - Search API for 'Virtual Group' entry type

### [TypeTypeWmsCapabilities](docs/typetypewmscapabilities/README.md)

* [SearchTypeWmsCapabilities](docs/typetypewmscapabilities/README.md#searchtypewmscapabilities) - Search API for 'WMS Capabilities' entry type

### [TypeTypeWmsLayer](docs/typetypewmslayer/README.md)

* [SearchTypeWmsLayer](docs/typetypewmslayer/README.md#searchtypewmslayer) - Search API for 'WMS Layer' entry type

### [TypeUfoSightings](docs/typeufosightings/README.md)

* [SearchUfoSightings](docs/typeufosightings/README.md#searchufosightings) - Search API for 'Ufo Sightings' entry type

### [TypeUsPlaces](docs/typeusplaces/README.md)

* [SearchUsPlaces](docs/typeusplaces/README.md#searchusplaces) - Search API for 'US Places' entry type

### [TypeVoteYesno](docs/typevoteyesno/README.md)

* [SearchVoteYesno](docs/typevoteyesno/README.md#searchvoteyesno) - Search API for 'Simple Yes-No Vote' entry type

### [TypeWeblog](docs/typeweblog/README.md)

* [SearchWeblog](docs/typeweblog/README.md#searchweblog) - Search API for 'Weblog' entry type

### [TypeWikipage](docs/typewikipage/README.md)

* [SearchWikipage](docs/typewikipage/README.md#searchwikipage) - Search API for 'Wiki Page' entry type
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
