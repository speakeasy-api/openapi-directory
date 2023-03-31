# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.MediaTabularExtractsheetQueryParams;
import org.openapis.openapi.models.operations.MediaTabularExtractsheetRequest;
import org.openapis.openapi.models.operations.MediaTabularExtractsheetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MediaTabularExtractsheetRequest req = new MediaTabularExtractsheetRequest() {{
                queryParams = new MediaTabularExtractsheetQueryParams() {{
                    arg1 = "corrupti";
                    entryid = "provident";
                    output = "distinctio";
                }};
            }};            

            MediaTabularExtractsheetResponse res = sdk.serviceMediaTabularExtractsheet.mediaTabularExtractsheet(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### serviceMediaTabularExtractsheet

* `mediaTabularExtractsheet` - API for Extract sheets

### type2017BoulderElectionExpenditures

* `search2017BoulderElectionExpenditures` - Search API for '2017 Boulder Election Expenditures' entry type

### typeAny

* `searchAny` - Search API for 'Any file type' entry type

### typeBeforeafter

* `searchBeforeafter` - Search API for 'Before and After Images' entry type

### typeBiblio

* `searchBiblio` - Search API for 'Bibliographic Entry' entry type

### typeBioDicom

* `searchBioDicom` - Search API for 'DICOM File' entry type

### typeBioDicomTest

* `searchBioDicomTest` - Search API for 'DICOM Test File' entry type

### typeBioFasta

* `searchBioFasta` - Search API for 'FASTA File' entry type

### typeBioFastq

* `searchBioFastq` - Search API for 'FASTQ File' entry type

### typeBioHmmerIndex

* `searchBioHmmerIndex` - Search API for 'HMMER Index File' entry type

### typeBioOmeTiff

* `searchBioOmeTiff` - Search API for 'OME TIFF File' entry type

### typeBioOntologyAssay

* `searchBioOntologyAssay` - Search API for 'Assay' entry type

### typeBioOntologyCohort

* `searchBioOntologyCohort` - Search API for 'Cohort' entry type

### typeBioOntologyPerson

* `searchBioOntologyPerson` - Search API for 'Person' entry type

### typeBioOntologySample

* `searchBioOntologySample` - Search API for 'Sample' entry type

### typeBioOntologySeries

* `searchBioOntologySeries` - Search API for 'Series' entry type

### typeBioOntologyStudy

* `searchBioOntologyStudy` - Search API for 'Study' entry type

### typeBioSam

* `searchBioSam` - Search API for 'SAM Data' entry type

### typeBioSfPdb

* `searchBioSfPdb` - Search API for 'PDB Protein File' entry type

### typeBioSra

* `searchBioSra` - Search API for 'Sequence Read Archive' entry type

### typeBioStockholm

* `searchBioStockholm` - Search API for 'Stockholm File' entry type

### typeBioTaxonomy

* `searchBioTaxonomy` - Search API for 'Taxonomic Entry' entry type

### typeBlogentry

* `searchBlogentry` - Search API for 'Weblog Entry' entry type

### typeBolderRentalHousing

* `searchBolderRentalHousing` - Search API for 'Boulder Rental Housing' entry type

### typeBookmarks

* `searchBookmarks` - Search API for 'Bookmarks' entry type

### typeBostonCrime

* `searchBostonCrime` - Search API for 'Boston Crime' entry type

### typeBoulder2017ElectionContributions

* `searchBoulder2017ElectionContributions` - Search API for 'Boulder 2017 Election Contributions' entry type

### typeBoulderCampaignContributions

* `searchBoulderCampaignContributions` - Search API for 'Boulder Campaign Contributions' entry type

### typeBoulderConsultingServices

* `searchBoulderConsultingServices` - Search API for 'Boulder Consulting Services Database' entry type

### typeBoulderCountyVoterDetails

* `searchBoulderCountyVoterDetails` - Search API for 'Boulder County Voter Details' entry type

### typeBoulderCrimes

* `searchBoulderCrimes` - Search API for 'Boulder Crime Reports' entry type

### typeBoulderEmails

* `searchBoulderEmails` - Search API for 'Boulder Council Emails' entry type

### typeBoulderEmployeeSalaries

* `searchBoulderEmployeeSalaries` - Search API for 'Boulder Employee Salaries' entry type

### typeCalendar

* `searchCalendar` - Search API for 'Calendar' entry type

### typeCampaignDonors

* `searchCampaignDonors` - Search API for 'Campaign Donors' entry type

### typeCampaignExpenditures

* `searchCampaignExpenditures` - Search API for 'Campaign Expenditures' entry type

### typeCataloglink

* `searchCataloglink` - Search API for 'Catalog Link' entry type

### typeCdmGrid

* `searchCdmGrid` - Search API for 'Gridded Data File' entry type

### typeChatroom

* `searchChatroom` - Search API for 'Chat Room' entry type

### typeColoradoWaterRights

* `searchColoradoWaterRights` - Search API for 'Colorado Water Rights' entry type

### typeCommitteeDonations

* `searchCommitteeDonations` - Search API for 'Committee Donations' entry type

### typeCommunityDatahub

* `searchCommunityDatahub` - Search API for 'Data Hub' entry type

### typeCommunityResource

* `searchCommunityResource` - Search API for 'Facility' entry type

### typeConstructionPermits

* `searchConstructionPermits` - Search API for 'Construction Permits' entry type

### typeContact

* `searchContact` - Search API for 'Contact List' entry type

### typeDbCoIndicators

* `searchDbCoIndicators` - Search API for 'Colorado Health Indicators' entry type

### typeEarthSatelliteLandsat

* `searchEarthSatelliteLandsat` - Search API for 'Landsat Satellite Data' entry type

### typeFaq

* `searchFaq` - Search API for 'FAQ' entry type

### typeFecPacs

* `searchFecPacs` - Search API for 'FEC PACs' entry type

### typeFeccandidates

* `searchFeccandidates` - Search API for 'Candidates' entry type

### typeFeed

* `searchFeed` - Search API for 'RSS/ATOM Feed' entry type

### typeFile

* `searchFile` - Search API for 'File' entry type

### typeFitsData

* `searchFitsData` - Search API for 'FITS Data File' entry type

### typeFtp

* `searchFtp` - Search API for 'Remote FTP File View' entry type

### typeGadgetsCountdown

* `searchGadgetsCountdown` - Search API for 'Countdown' entry type

### typeGadgetsStock

* `searchGadgetsStock` - Search API for 'Stock Ticker' entry type

### typeGadgetsWeather

* `searchGadgetsWeather` - Search API for 'Weather' entry type

### typeGazeteerCensusTracts

* `searchGazeteerCensusTracts` - Search API for 'Census Tracts' entry type

### typeGazeteerCounties

* `searchGazeteerCounties` - Search API for 'Census Gazeteer Counties' entry type

### typeGeoGe

* `searchGeoGeojson` - Search API for 'GeoJson File' entry type

### typeGeoGeotiff

* `searchGeoGeotiff` - Search API for 'GeoTIFF' entry type

### typeGeoGpx

* `searchGeoGpx` - Search API for 'GPX GPS File' entry type

### typeGeoHdf5

* `searchGeoHdf5` - Search API for 'HDF5 File' entry type

### typeGeoKml

* `searchGeoKml` - Search API for 'KML/KMZ File' entry type

### typeGeoShapefile

* `searchGeoShapefile` - Search API for 'Shapefile' entry type

### typeGeoShapefileFips

* `searchGeoShapefileFips` - Search API for 'Shapefile with FIPS Code' entry type

### typeGlossary

* `searchGlossary` - Search API for 'Glossary' entry type

### typeGridaggregation

* `searchGridaggregation` - Search API for 'Grid Aggregation' entry type

### typeGroup

* `searchGroup` - Search API for 'Folder' entry type

### typeHipchatGroup

* `searchHipchatGroup` - Search API for 'HipChat Group' entry type

### typeHomepage

* `searchHomepage` - Search API for 'Home Page' entry type

### typeIncident

* `searchIncident` - Search API for 'Incident' entry type

### typeJeopardy

* `searchJeopardy` - Search API for 'Jeopardy' entry type

### typeLatlonimage

* `searchLatlonimage` - Search API for 'Lat-Lon Image' entry type

### typeLidarCollection

* `searchLidarCollection` - Search API for 'LiDAR Collection' entry type

### typeLidarLas

* `searchLidarLas` - Search API for 'LAS Lidar Data' entry type

### typeLidarLvis

* `searchLidarLvis` - Search API for 'LVIS Lidar Data' entry type

### typeLink

* `searchLink` - Search API for 'Link' entry type

### typeLocalfiles

* `searchLocalfiles` - Search API for 'Server Side Files' entry type

### typeLocations

* `searchLocations` - Search API for 'Locations' entry type

### typeMapGooglemap

* `searchMapGooglemap` - Search API for 'Google Map URL' entry type

### typeMediaAudiofile

* `searchMediaAudiofile` - Search API for 'Audio File' entry type

### typeMediaImageloop

* `searchMediaImageloop` - Search API for 'Image Loop' entry type

### typeMediaPhotoalbum

* `searchMediaPhotoalbum` - Search API for 'Photo Album' entry type

### typeMediaVideoChannel

* `searchMediaVideoChannel` - Search API for 'Video Channel' entry type

### typeMediaVideoQuicktime

* `searchMediaVideoQuicktime` - Search API for 'Quicktime Video' entry type

### typeMediaYoutubevideo

* `searchMediaYoutubevideo` - Search API for 'YouTube Video' entry type

### typeNotes

* `searchNotes` - Search API for 'Notes' entry type

### typeNotesJsonfile

* `searchNotesJsonfile` - Search API for 'Json File' entry type

### typeNotesNote

* `searchNotesNote` - Search API for 'Note' entry type

### typeNotesNotebook

* `searchNotesNotebook` - Search API for 'Notebook' entry type

### typeNwsfeed

* `searchNwsfeed` - Search API for 'NWS Forecast Feed' entry type

### typeOpendaplink

* `searchOpendaplink` - Search API for 'OPeNDAP Link' entry type

### typeOwlClass

* `searchOwlClass` - Search API for 'OWL Class' entry type

### typeOwlOntology

* `searchOwlOntology` - Search API for 'OWL Ontology' entry type

### typePasteitentry

* `searchPasteitentry` - Search API for 'Paste Text Entry' entry type

### typePointText

* `searchPointText` - Search API for 'Text Point Data' entry type

### typePoliceStopData

* `searchPoliceStopData` - Search API for 'Police Stop Data' entry type

### typePoll

* `searchPoll` - Search API for 'Poll' entry type

### typeProjectCampaign

* `searchProjectCampaign` - Search API for 'Campaign' entry type

### typeProjectCasestudy

* `searchProjectCasestudy` - Search API for 'Case Study' entry type

### typeProjectContribution

* `searchProjectContribution` - Search API for 'Research Contribution' entry type

### typeProjectDataformat

* `searchProjectDataformat` - Search API for 'Data Format' entry type

### typeProjectDataset

* `searchProjectDataset` - Search API for 'Dataset' entry type

### typeProjectDeployment

* `searchProjectDeployment` - Search API for 'Deployment' entry type

### typeProjectExperiment

* `searchProjectExperiment` - Search API for 'Experiment' entry type

### typeProjectFieldnote

* `searchProjectFieldnote` - Search API for 'Field Note' entry type

### typeProjectGpsControlpoints

* `searchProjectGpsControlpoints` - Search API for 'Control Points File' entry type

### typeProjectGpsRaw

* `searchProjectGpsRaw` - Search API for 'Raw GPS File' entry type

### typeProjectGpsRinex

* `searchProjectGpsRinex` - Search API for 'RINEX File' entry type

### typeProjectInstrument

* `searchProjectInstrument` - Search API for 'Instrument Data Collection' entry type

### typeProjectLearningResource

* `searchProjectLearningResource` - Search API for 'Teaching Resource' entry type

### typeProjectMeeting

* `searchProjectMeeting` - Search API for 'Meeting' entry type

### typeProjectOrganization

* `searchProjectOrganization` - Search API for 'Organization' entry type

### typeProjectProgram

* `searchProjectProgram` - Search API for 'Program' entry type

### typeProjectProject

* `searchProjectProject` - Search API for 'Project' entry type

### typeProjectService

* `searchProjectService` - Search API for 'Data Access Service' entry type

### typeProjectSite

* `searchProjectSite` - Search API for 'Site' entry type

### typeProjectSoftwarepackage

* `searchProjectSoftwarepackage` - Search API for 'Software Tool' entry type

### typeProjectStandardName

* `searchProjectStandardName` - Search API for 'Standard Parameter Name' entry type

### typeProjectSurveylocation

* `searchProjectSurveylocation` - Search API for 'Survey Location' entry type

### typeProjectTerm

* `searchProjectTerm` - Search API for 'Vocabulary Term' entry type

### typeProjectVisit

* `searchProjectVisit` - Search API for 'Site Visit' entry type

### typeProjectVocabulary

* `searchProjectVocabulary` - Search API for 'Vocabulary' entry type

### typePropertySales

* `searchPropertySales` - Search API for 'Property Sales' entry type

### typePropertydb

* `searchPropertydb` - Search API for 'Property Database' entry type

### typePythonNotebook

* `searchPythonNotebook` - Search API for 'IPython Notebook file' entry type

### typeSlackTeam

* `searchSlackTeam` - Search API for 'Slack Team' entry type

### typeStatusboard

* `searchStatusboard` - Search API for 'Status Board' entry type

### typeSunrisesunset

* `searchSunrisesunset` - Search API for 'Sunrise/Sunset Display' entry type

### typeTasks

* `searchTasks` - Search API for 'Tasks' entry type

### typeTmdbmovies

* `searchTmdbmovies` - Search API for 'Tmdb Movies' entry type

### typeTodo

* `searchTodo` - Search API for 'Todo' entry type

### typeTripEvent

* `searchTripEvent` - Search API for 'Event' entry type

### typeTripFlight

* `searchTripFlight` - Search API for 'Flight Leg' entry type

### typeTripHotel

* `searchTripHotel` - Search API for 'Lodging' entry type

### typeTripReport

* `searchTripReport` - Search API for 'Trip Report' entry type

### typeTripTrip

* `searchTripTrip` - Search API for 'Trip' entry type

### typeTypeAwcMetar

* `searchTypeAwcMetar` - Search API for 'AWC Weather Observations' entry type

### typeTypeBizStockseries

* `searchTypeBizStockseries` - Search API for 'Stock Ticker Data' entry type

### typeTypeBlsSeries

* `searchTypeBlsSeries` - Search API for 'BLS Series' entry type

### typeTypeBlsSurvey

* `searchTypeBlsSurvey` - Search API for 'BLS Survey' entry type

### typeTypeCensusAcs

* `searchTypeCensusAcs` - Search API for 'US Census ACS Data' entry type

### typeTypeDaymet

* `searchTypeDaymet` - Search API for 'Daymet Daily Weather' entry type

### typeTypeDbTable

* `searchTypeDbTable` - Search API for 'Database Table' entry type

### typeTypeDocumentCsv

* `searchTypeDocumentCsv` - Search API for 'CSV File' entry type

### typeTypeDocumentDoc

* `searchTypeDocumentDoc` - Search API for 'Word File' entry type

### typeTypeDocumentHtml

* `searchTypeDocumentHtml` - Search API for 'HTML File' entry type

### typeTypeDocumentPdf

* `searchTypeDocumentPdf` - Search API for 'PDF File' entry type

### typeTypeDocumentPpt

* `searchTypeDocumentPpt` - Search API for 'Powerpoint File' entry type

### typeTypeDocumentXls

* `searchTypeDocumentXls` - Search API for 'Excel File' entry type

### typeTypeDrilsdownCasestudy

* `searchTypeDrilsdownCasestudy` - Search API for 'Drilsdown Case Study' entry type

### typeTypeEdgarFiling

* `searchTypeEdgarFiling` - Search API for 'SEC EDGAR Filing' entry type

### typeTypeEiaCategory

* `searchTypeEiaCategory` - Search API for 'EIA Category' entry type

### typeTypeEiaSeries

* `searchTypeEiaSeries` - Search API for 'EIA Series' entry type

### typeTypeEsriFeatureserver

* `searchTypeEsriFeatureserver` - Search API for 'ESRI Feature Server' entry type

### typeTypeEsriGeometryserver

* `searchTypeEsriGeometryserver` - Search API for 'ESRI Geometry Server' entry type

### typeTypeEsriGpserver

* `searchTypeEsriGpserver` - Search API for 'ESRI GP Server' entry type

### typeTypeEsriImageserver

* `searchTypeEsriImageserver` - Search API for 'ESRI Image Server' entry type

### typeTypeEsriLayer

* `searchTypeEsriLayer` - Search API for 'ESRI Layer' entry type

### typeTypeEsriMapserver

* `searchTypeEsriMapserver` - Search API for 'ESRI Map Server' entry type

### typeTypeEsriRestfolder

* `searchTypeEsriRestfolder` - Search API for 'ESRI Services Folder' entry type

### typeTypeEsriRestserver

* `searchTypeEsriRestserver` - Search API for 'ESRI Web Server' entry type

### typeTypeEsriRestservice

* `searchTypeEsriRestservice` - Search API for 'ESRI Rest Service' entry type

### typeTypeExtremes

* `searchTypeExtremes` - Search API for 'NOAA Extremes Data' entry type

### typeTypeFredCategory

* `searchTypeFredCategory` - Search API for 'FRED Category' entry type

### typeTypeFredSeries

* `searchTypeFredSeries` - Search API for 'FRED Series' entry type

### typeTypeGtfsAgency

* `searchTypeGtfsAgency` - Search API for 'Transit Agency' entry type

### typeTypeGtfsRoute

* `searchTypeGtfsRoute` - Search API for 'Transit Route' entry type

### typeTypeGtfsRoutes

* `searchTypeGtfsRoutes` - Search API for 'Transit Route Collection' entry type

### typeTypeGtfsStop

* `searchTypeGtfsStop` - Search API for 'Transit Stop' entry type

### typeTypeGtfsStops

* `searchTypeGtfsStops` - Search API for 'Transit Stop Collection' entry type

### typeTypeGtfsTrip

* `searchTypeGtfsTrip` - Search API for 'Transit Trip' entry type

### typeTypeHazarddata

* `searchTypeHazarddata` - Search API for 'Hazard Data' entry type

### typeTypeHydroColorado

* `searchTypeHydroColorado` - Search API for 'Colorado DNR Stream Gage' entry type

### typeTypeIdvBundle

* `searchTypeIdvBundle` - Search API for 'IDV Bundle' entry type

### typeTypeImage

* `searchTypeImage` - Search API for 'Image' entry type

### typeTypeImageAirport

* `searchTypeImageAirport` - Search API for 'Airport Image' entry type

### typeTypeImageWebcam

* `searchTypeImageWebcam` - Search API for 'Webcam' entry type

### typeTypeMb

* `searchTypeMb` - Search API for 'MB Bathymetry' entry type

### typeTypeMbCollection

* `searchTypeMbCollection` - Search API for 'Bathymetry Collection' entry type

### typeTypeMbPointBasic

* `searchTypeMbPointBasic` - Search API for 'Basic MB point file' entry type

### typeTypeMetametaDictionary

* `searchTypeMetametaDictionary` - Search API for 'Metadata Dictionary' entry type

### typeTypeMetametaField

* `searchTypeMetametaField` - Search API for 'Metadata Field' entry type

### typeTypeNasaames

* `searchTypeNasaames` - Search API for 'NASA AMES File' entry type

### typeTypeNcss

* `searchTypeNcss` - Search API for 'NetCDF Point Subset' entry type

### typeTypeNitf

* `searchTypeNitf` - Search API for 'NITF File' entry type

### typeTypePointAmerifluxLevel2

* `searchTypePointAmerifluxLevel2` - Search API for 'Ameriflux Level 2 CSV File' entry type

### typeTypePointAmrcFinal

* `searchTypePointAmrcFinal` - Search API for 'AMRC Final QC Data' entry type

### typeTypePointAmrcFreewave

* `searchTypePointAmrcFreewave` - Search API for 'AMRC Freewave  Data' entry type

### typeTypePointCzo

* `searchTypePointCzo` - Search API for 'CZO Display File Format' entry type

### typeTypePointGcnet

* `searchTypePointGcnet` - Search API for 'GC-Net Point Data' entry type

### typeTypePointGeomagIaga2002

* `searchTypePointGeomagIaga2002` - Search API for 'IAGA 2002 Geomagnetism Data' entry type

### typeTypePointHydroWaterml

* `searchTypePointHydroWaterml` - Search API for 'WaterML' entry type

### typeTypePointIcebridgeAtmIcessn

* `searchTypePointIcebridgeAtmIcessn` - Search API for 'ATM Ice SSN Data' entry type

### typeTypePointIcebridgeAtmQfit

* `searchTypePointIcebridgeAtmQfit` - Search API for 'ATM QFIT Data' entry type

### typeTypePointIcebridgeMccordsIrmcr2

* `searchTypePointIcebridgeMccordsIrmcr2` - Search API for 'McCords Irmcr2 Data' entry type

### typeTypePointIcebridgeMccordsIrmcr3

* `searchTypePointIcebridgeMccordsIrmcr3` - Search API for 'McCords Irmcr3 Data' entry type

### typeTypePointIcebridgeParis

* `searchTypePointIcebridgeParis` - Search API for 'Paris Data' entry type

### typeTypePointIdv

* `searchTypePointIdv` - Search API for 'IDV Point File' entry type

### typeTypePointInline

* `searchTypePointInline` - Search API for 'Inline Point File' entry type

### typeTypePointNcdcClimate

* `searchTypePointNcdcClimate` - Search API for 'NC  DC Climate Data' entry type

### typeTypePointNetcdf

* `searchTypePointNetcdf` - Search API for 'NetCDF Point File' entry type

### typeTypePointNoaaCarbon

* `searchTypePointNoaaCarbon` - Search API for 'NOAA Carbon Measurements' entry type

### typeTypePointNoaaFlaskEvent

* `searchTypePointNoaaFlaskEvent` - Search API for 'NOAA Flask Event Measurements' entry type

### typeTypePointNoaaFlaskMonth

* `searchTypePointNoaaFlaskMonth` - Search API for 'NOAA Flask Month Measurements' entry type

### typeTypePointNoaaMadis

* `searchTypePointNoaaMadis` - Search API for 'NOAA MADIS Point Data' entry type

### typeTypePointNoaaTower

* `searchTypePointNoaaTower` - Search API for 'NOAA Tower Network' entry type

### typeTypePointOceanCnv

* `searchTypePointOceanCnv` - Search API for 'SeaBird CNV Data' entry type

### typeTypePointOceanCsvSadoTTS

* `searchTypePointOceanCsvSadoTTS` - Search API for 'SADO TTS Data' entry type

### typeTypePointOceanCsvSadoMeteo

* `searchTypePointOceanCsvSadoMeteo` - Search API for 'SADO Meteo Data' entry type

### typeTypePointOceanCsvSadoPosition

* `searchTypePointOceanCsvSadoPosition` - Search API for 'SADO Position Data' entry type

### typeTypePointOceanNetcdfGlider

* `searchTypePointOceanNetcdfGlider` - Search API for 'NetCDF Glider Data' entry type

### typeTypePointOceanNetcdfTrack

* `searchTypePointOceanNetcdfTrack` - Search API for 'NetCDF Track Data' entry type

### typeTypePointOceanOoiDmgx

* `searchTypePointOceanOoiDmgx` - Search API for 'OOI Data' entry type

### typeTypePointOpenaq

* `searchTypePointOpenaq` - Search API for 'Open AQ Air Quality' entry type

### typeTypePointPboPositionTimeSeries

* `searchTypePointPboPositionTimeSeries` - Search API for 'PBO Position Time Series' entry type

### typeTypePointSimpleRecords

* `searchTypePointSimpleRecords` - Search API for 'Simple Records' entry type

### typeTypePointSnotel

* `searchTypePointSnotel` - Search API for 'SNOTEL Snow Data' entry type

### typeTypePointText

* `searchTypePointText` - Search API for 'Record Text File' entry type

### typeTypePointWsbbGgp

* `searchTypePointWsbbGgp` - Search API for 'Global Geodynamics GGP Format' entry type

### typeTypePsdMonthlyClimateIndex

* `searchTypePsdMonthlyClimateIndex` - Search API for 'NOAA-ESRL-PSD Monthly Climate Index' entry type

### typeTypeQuandlSeries

* `searchTypeQuandlSeries` - Search API for 'QUANDL Series' entry type

### typeTypeServiceGroup

* `searchTypeServiceGroup` - Search API for 'Service Group' entry type

### typeTypeServiceLink

* `searchTypeServiceLink` - Search API for 'Service Link' entry type

### typeTypeSocrataSeries

* `searchTypeSocrataSeries` - Search API for 'SOCRATA Series' entry type

### typeTypeSoundingCod

* `searchTypeSoundingCod` - Search API for 'COD Sounding' entry type

### typeTypeSoundingFrd

* `searchTypeSoundingFrd` - Search API for 'FRD Sounding' entry type

### typeTypeSoundingGsd

* `searchTypeSoundingGsd` - Search API for 'GSD Sounding' entry type

### typeTypeSoundingWyoming

* `searchTypeSoundingWyoming` - Search API for 'UW Sounding' entry type

### typeTypeTmy

* `searchTypeTmy` - Search API for 'NREL TMY Data' entry type

### typeTypeTweet

* `searchTypeTweet` - Search API for 'Tweet' entry type

### typeTypeUsgsGauge

* `searchTypeUsgsGauge` - Search API for 'USGS Stream Gauge' entry type

### typeTypeVirtual

* `searchTypeVirtual` - Search API for 'Virtual Group' entry type

### typeTypeWmsCapabilities

* `searchTypeWmsCapabilities` - Search API for 'WMS Capabilities' entry type

### typeTypeWmsLayer

* `searchTypeWmsLayer` - Search API for 'WMS Layer' entry type

### typeUfoSightings

* `searchUfoSightings` - Search API for 'Ufo Sightings' entry type

### typeUsPlaces

* `searchUsPlaces` - Search API for 'US Places' entry type

### typeVoteYesno

* `searchVoteYesno` - Search API for 'Simple Yes-No Vote' entry type

### typeWeblog

* `searchWeblog` - Search API for 'Weblog' entry type

### typeWikipage

* `searchWikipage` - Search API for 'Wiki Page' entry type
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
